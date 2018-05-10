interface Documentation {
    sections: SectionDocumentation[];
}

interface SectionDocumentation {
    // The section title, e.g. "adapters".
    title: string;
    classes: ClassDocumentation[];
}

interface ClassDocumentation {
    // The name of the class, e.g. "CollateralizedSimpleInterestLoanAdapter".
    name: string;
    methods: MethodDocumentation[];
}

interface MethodDocumentation {
    // The method's name, e.g. "returnCollateral"
    name: string;
    // The description of the method, as provided in comments (doc block.)
    description: string;
    // An example of how to use the method.
    example: string;
    // The typescript-formatted parameters list, e.g. "agreementId: string".
    params: string;
    // The location of the method definition,
    // e.g. "adapters/collateralized_simple_interest_loan_adapter.ts#L348"
    source: string;
    // The method's signature, in Typescript format,
    // e.g. "canReturnCollateral(agreementId: string): Promise<boolean>"
    signature: string;
}
