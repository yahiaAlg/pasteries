Create a professional landing page and gallery for "دورة الباتيسري فين" with the following specifications:

Landing Page (index.html):

    Use HTML5, CSS3 (with Flexbox/Grid), and modern JavaScript
    Implement RTL layout with Arabic font optimization (Noto Naskh Arabic or similar)
    Create responsive design (mobile-first approach)
    Include smooth scroll animations
    Use semantic HTML structure
    Follow WCAG accessibility guidelines

Style Requirements:

    Color palette: #F5E6E0 (soft beige), #FAD3D3 (pastel pink), #FFFFFF (white), #2C1810 (dark brown for text)
    Font hierarchy: 3 sizes (heading, subheading, body text)
    Box shadows and subtle transitions
    Proper spacing and padding (min 1.5rem between sections)
    Sticky navigation header

Components to Build:

    Hero Section:
        Fullscreen background (high-quality pastry image)
        Centered title with animation
        Prominent CTA button
    Course Content:
        Cards layout for 15 pastry types
        Icon-based feature list
        Progress indicators
    Benefits Section:
        Grid of benefit cards
        Hover effects
        Icon illustrations
    CTA Section:
        Contact form
        WhatsApp/Telegram integration
        Social proof elements

Gallery Page (gallery.html):

    Implement CSS Grid (3x5 layout)
    Lazy loading for images
    Filtering capability
    Lightbox functionality:
        Image zoom
        Navigation arrows
        Close button
        Caption support
        Touch-friendly gestures

Technical Requirements:

    Optimize all images (WebP format with fallbacks)
    Implement proper meta tags
    Add Schema.org markup
    Ensure fast loading (max 3s)
    Cross-browser compatibility
    Mobile-responsive breakpoints:
        Mobile: 320px
        Tablet: 768px
        Desktop: 1024px+

Deliverables:

    HTML files (index.html, gallery.html)
    CSS file (styles.css)
    JavaScript file (main.js)
    Assets folder (images, icons)
    Documentation for maintenance

(NOTICE:just vanilla JS, HTML5, CSS3, no react or typscript)

---

Based on your requirements, I'll create a professional landing page and gallery for "دورة الباتيسري فين" (Patisserie Fine Course) focusing on beautiful design with RTL support. This first version will include all the core functionalities needed for an elegant, responsive pastry course website.

Core Features:

    RTL layout optimized for Arabic content with appropriate font selection
    Responsive design following a mobile-first approach with breakpoints at 320px, 768px, and 1024px
    Interactive gallery with filtering and lightbox functionality
    Smooth animations and transitions for an elevated user experience
    Contact form with social media integration
    Course content cards showcasing the 15 pastry types
    Benefits section with hover effects and icon illustrations
    Optimized image loading with WebP format and fallbacks

Design Elements:

    Elegant color palette using #F5E6E0 (soft beige), #FAD3D3 (pastel pink), #FFFFFF (white), and #2C1810 (dark brown)
    Typography hierarchy using Noto Naskh Arabic font for optimal Arabic text rendering
    Box shadows and subtle transitions for depth and interactivity
    Consistent 8px spacing system with ample whitespace (minimum 1.5rem between sections)
    Sticky navigation header with smooth scroll functionality
    Apple-inspired minimalist aesthetic with attention to detail and refined interactions

---

You are an expert Django developer and architect. I will provide you with a folder of static HTML/CSS/JS theme pages. Your task is to scaffold a complete Django project and one reusable app that:

1. **Project setup**

   - Creates a new Django project named `pasteries`.
   - Uses Python 3.10+ and Django 4.x.
   - Configures settings for `INSTALLED_APPS`, `TEMPLATES`, `STATICFILES_DIRS`, `MEDIA_URL`/`MEDIA_ROOT`, and a SQLite database.

2. **App scaffolding**

   - Creates a Django app named `pages`.
   - Registers it in the project’s `settings.py`.

3. **Models**

   - From the provided specification `<<data_model_spec>>`, generate Django `models.py` with:
     - Field types, verbose names, proper relationships (`ForeignKey`, `ManyToManyField`, `OneToOneField`).
     - `__str__` methods.
     - Meta options (ordering, verbose_name).

4. **Admin**

   - In `admin.py`, register all models with:
     - Custom `ModelAdmin` classes that define `list_display`, `search_fields`, `list_filter`, and any inline related models.

5. **Forms**

   - In `forms.py`, create:
     - ModelForms for create/update views.
     - Any custom validation or `clean_<field>()` methods as needed by the spec.

6. **URLs & Views**

   - In `pages/urls.py`, define URL patterns for:
     - List, Detail, Create, Update, Delete views.
   - In the app’s `views.py`, implement each view as class­based views (e.g., `ListView`, `DetailView`, `CreateView`, etc.).
   - Apply any access controls (e.g., `LoginRequiredMixin`, `PermissionRequiredMixin`) based on the spec.

7. **Templates**

   - Copy your provided HTML theme files into the appropriate subfolders under `templates/pages/`.
   - Convert them to Django templates by:
     - Extending a base template (`base.html`).
     - Converting static asset links (`<link href="/css/style.css">`) to `{% static 'css/style.css' %}`.
     - Replacing repeated sections (navbar, footer) with `{% include 'partials/navbar.html' %}` etc.
   - Ensure you generate:
     - `templates/base.html` (with block definitions: `head`, `title`, `content`, `scripts`)
     - `templates/partials/` for header, navbar, footer, and any theme components.
     - `templates/pages/` for List, Detail, Form, and Confirm Delete pages.

8. **Static files**

   - Place theme CSS/JS/images into `static/pasteries/css/`, `js/`, and `images/`.

9. **Admin base templates (Optional)**

   - Provide an admin override in `templates/admin/base_site.html` that matches the theme’s look and feel (logo, colors).

10. **README**
    - Generate a `README.md` with project description, setup instructions (`pip install -r requirements.txt`, `python manage.py migrate`, `runserver`), and notes on structure.

**Constraints & Best Practices**

- Follow PEP8 and Django conventions.
- Use `{% url %}` template tags, not hard-coded links.
- Keep view logic minimal; push complexity into models/managers/forms.
- Use `get_absolute_url()` on models for redirects.

---

Please output:

1. A shell script or CLI commands to scaffold the project/app.
2. The complete file tree with file contents for:
   - `project_name/`
   - `settings.py`, `urls.py`, `wsgi.py`
   - `app_name/` (`models.py`, `views.py`, `forms.py`, `urls.py`, `admin.py`)
   - `templates/` and `static/` structure with converted templates.
3. A `requirements.txt`.

Begin by outlining the project layout you will create, then provide the code files.
