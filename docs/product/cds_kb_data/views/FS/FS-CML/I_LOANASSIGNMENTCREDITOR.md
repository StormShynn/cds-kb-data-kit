---
name: I_LOANASSIGNMENTCREDITOR
description: "Loan Assignment Creditor"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANASSIGNMENTCREDITOR')/$value
semantic_en: "Loan Assignment Creditor"
semantic_vi: "Loan Assignment Creditor — CDS view giao diện dựa trên tds1."
keywords:
  - "loan"
  - "assignment"
  - "creditor"
  - "acct"
  - "assgmt"
  - "contract"
  - "text"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANASSIGNMENTCREDITOR

**Loan Assignment Creditor**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANASSIGNMENTCREDITOR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanAssignmentCreditor` | ✓ | |  | `sabt` | `CHAR(4)` | Assignee |
| `LoanAcctAssgmtRef` |  | |  | `rrefkont` | `CHAR(8)` | Account Assignment Reference in Financial Assets Management |
| `LoanAssignmentContractText` |  | |  | `refvert` | `CHAR(25)` | Contract of assignment proposal |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LoanAssignmentCreditorText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANASSIGNMENTCREDITOR')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANASSIGNMENTCREDITOR')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILASSGNCREDTR',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'LoanAssignmentCreditor'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Assignment Creditor'
define view I_LoanAssignmentCreditor
  as select from tds1
  association [0..*] to I_LoanAssignmentCreditorText as _Text on $projection.LoanAssignmentCreditor = _Text.LoanAssignmentCreditor
{
      @ObjectModel.text.association: '_Text'
  key sabt     as LoanAssignmentCreditor,

      rrefkont as LoanAcctAssgmtRef,
      refvert  as LoanAssignmentContractText,

      _Text
}
```
