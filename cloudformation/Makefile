include ../aws.env

.PHONY: check-region stack clean

check-region:
	test -n "$(AWS_REGION)" || (echo "AWS_REGION must be defined in ../aws.env"; exit 1)

stack: check-region
	aws --region $(AWS_REGION) cloudformation create-stack --stack-name bstalk --capabilities "CAPABILITY_NAMED_IAM" --template-body file://beanstalk-resources.yml

clean: check-region
	aws --region $(AWS_REGION) cloudformation delete-stack --stack-name bstalk
