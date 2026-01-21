
import React, { useState } from 'react';
import { ForumPost } from '../types';

const INITIAL_POSTS: ForumPost[] = [
  {
    id: '1',
    author: 'Mama Bear',
    authorRole: 'parent',
    title: 'Tips for picky eaters?',
    content: "My 3-year-old has suddenly decided that anything green is lava. Any creative recipes that 'hide' veggies successfully?",
    date: '2024-05-10',
    likes: 12,
    replies: 5,
    category: 'Health'
  },
  {
    id: '2',
    author: 'Coach David',
    authorRole: 'admin',
    title: 'Weekend Soccer Meetup',
    content: 'We are hosting an informal soccer morning at Sunnyside Park this Saturday. All skill levels welcome!',
    date: '2024-05-11',
    likes: 24,
    replies: 8,
    category: 'Events'
  },
  {
    id: '3',
    author: 'NewbieDad',
    authorRole: 'parent',
    title: 'Best children books for bed time?',
    content: "Looking for recommendations for books that are calming but engaging for a toddler's evening routine.",
    date: '2024-05-12',
    likes: 8,
    replies: 15,
    category: 'Parenting'
  }
];

const Forum: React.FC = () => {
  const [posts, setPosts] = useState<ForumPost[]>(INITIAL_POSTS);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', content: '', category: 'General' as ForumPost['category'] });

  const handleLike = (id: string) => {
    setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(p => p.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const post: ForumPost = {
      id: Date.now().toString(),
      author: 'You',
      authorRole: 'parent',
      title: newPost.title,
      content: newPost.content,
      date: new Date().toISOString().split('T')[0],
      likes: 0,
      replies: 0,
      category: newPost.category
    };
    setPosts([post, ...posts]);
    setIsCreating(false);
    setNewPost({ title: '', content: '', category: 'General' });
  };

  return (
    <section className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-bold font-display text-slate-900 mb-2">Community Hub</h1>
            <p className="text-slate-500">A safe space for parents to share, learn, and connect.</p>
          </div>
          <div className="flex gap-4 items-center">
             <label className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest cursor-pointer">
               Admin Mode
               <input 
                type="checkbox" 
                checked={isAdminMode} 
                onChange={() => setIsAdminMode(!isAdminMode)}
                className="w-4 h-4 accent-emerald-500"
               />
             </label>
             <button 
                onClick={() => setIsCreating(true)}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-full shadow-lg shadow-emerald-100 transition-all active:scale-95"
             >
               Start Discussion
             </button>
          </div>
        </div>

        {isCreating && (
          <div className="mb-12 bg-white p-8 rounded-[40px] shadow-xl border border-emerald-100 animate-in fade-in slide-in-from-top-4">
            <h3 className="text-xl font-bold mb-6 font-display">Create New Thread</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Thread Title"
                  className="w-full px-6 py-3 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500"
                  value={newPost.title}
                  onChange={e => setNewPost({...newPost, title: e.target.value})}
                  required
                />
                <select 
                  className="w-full px-6 py-3 bg-slate-50 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500 appearance-none"
                  value={newPost.category}
                  onChange={e => setNewPost({...newPost, category: e.target.value as any})}
                >
                  <option>General</option>
                  <option>Health</option>
                  <option>Events</option>
                  <option>Parenting</option>
                </select>
              </div>
              <textarea 
                placeholder="What's on your mind?"
                className="w-full px-6 py-4 bg-slate-50 rounded-3xl outline-none focus:ring-2 focus:ring-emerald-500 h-32"
                value={newPost.content}
                onChange={e => setNewPost({...newPost, content: e.target.value})}
                required
              />
              <div className="flex justify-end gap-4">
                <button type="button" onClick={() => setIsCreating(false)} className="px-6 py-2 text-slate-400 font-bold">Cancel</button>
                <button type="submit" className="bg-emerald-500 text-white px-8 py-2 rounded-2xl font-bold hover:bg-emerald-600">Post Thread</button>
              </div>
            </form>
          </div>
        )}

        <div className="space-y-6">
          {posts.map(post => (
            <div key={post.id} className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 group transition-all hover:shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center font-bold text-sky-600">
                    {post.author[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-800">{post.author}</span>
                      {post.authorRole === 'admin' && (
                        <span className="bg-emerald-100 text-emerald-600 text-[8px] font-bold uppercase px-1.5 py-0.5 rounded">Educator</span>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest">{post.date} • {post.category}</span>
                  </div>
                </div>
                {isAdminMode && (
                  <button onClick={() => handleDelete(post.id)} className="text-red-400 hover:text-red-600 text-xs font-bold uppercase tracking-widest">
                    Delete Post
                  </button>
                )}
              </div>
              
              <h3 className="text-xl font-bold font-display text-slate-900 mb-3">{post.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {post.content}
              </p>
              
              <div className="flex gap-6 items-center pt-4 border-t border-slate-50">
                <button 
                  onClick={() => handleLike(post.id)}
                  className="flex items-center gap-2 text-slate-400 hover:text-rose-500 transition-colors"
                >
                  <span className="text-lg">💖</span>
                  <span className="text-xs font-bold">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-slate-400 hover:text-sky-500 transition-colors">
                  <span className="text-lg">💬</span>
                  <span className="text-xs font-bold">{post.replies} Replies</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Forum;
