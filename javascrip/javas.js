const anim = new IntersectionObserver( (entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add('aparecer-cmp')
                } else{
                    entry.target.classList.remove('aparecer-cmp')
                }
            })
        });

        const elementos = document.querySelectorAll('.aparecer')

        elementos.forEach((elementos) => anim.observe (elementos))



