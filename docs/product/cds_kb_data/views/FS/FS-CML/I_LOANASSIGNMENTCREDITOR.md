---
name: I_LOANASSIGNMENTCREDITOR
description: "Loan Assignment Creditor"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
