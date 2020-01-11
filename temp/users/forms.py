from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import get_user_model

class UserMakeForm(UserCreationForm):
    
    class Meta:
        fields=('first_name','last_name','username','email','password1','password2')
        model = get_user_model()
        

    def __init__(self,*args,**kwargs):
        super().__init__(*args,**kwargs)
        self.fields['first_name'].label = 'First Name'
        self.fields['last_name'].label = 'Last Name'
        self.fields['email'].label = 'Email Address'

        