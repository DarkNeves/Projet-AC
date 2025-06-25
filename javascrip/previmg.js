const inputfile = document.querySelector('#pict-inp');
        const pictureLabel = document.querySelector('.picture');
        const placeholderTextSpan = document.querySelector('.ii');
        const initialPlaceholderText = 'Envie uma foto antiga usando o <br>item';

        placeholderTextSpan.innerHTML = initialPlaceholderText;

        inputfile.addEventListener('change', function(e) {
            const inputTarget = e.target;
            const file = inputTarget.files[0];

            if (file) {
                const reader = new FileReader();

                reader.addEventListener('load', function(event) {
                    pictureLabel.style.backgroundImage = `url('${event.target.result}')`;
                    pictureLabel.style.backgroundSize = 'cover';
                    pictureLabel.style.backgroundRepeat = 'no-repeat';
                    pictureLabel.style.backgroundPosition = 'center';
                    placeholderTextSpan.style.display = 'none';
                });

                reader.readAsDataURL(file);
            } else {
                pictureLabel.style.backgroundImage = 'none';
                placeholderTextSpan.style.display = '';
                placeholderTextSpan.innerHTML = initialPlaceholderText;
            }
        });