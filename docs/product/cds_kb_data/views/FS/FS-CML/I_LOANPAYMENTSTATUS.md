---
name: I_LOANPAYMENTSTATUS
description: "Loan Payment Status"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANPAYMENTSTATUS')/$value
semantic_en: "Loan Payment Status"
semantic_vi: "Loan Payment Status — CDS view giao diện dựa trên dd07l."
keywords:
  - "loan"
  - "payment"
  - "status"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
  - payment
---
# I_LOANPAYMENTSTATUS

**Loan Payment Status**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANPAYMENTSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanPaymentStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as tb_paym_status preserving type )` | `CHAR(1)` | Payment Status |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LoanPaymentStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANPAYMENTSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANPAYMENTSTATUS')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILPAYSTAT',
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
    representativeKey: 'LoanPaymentStatus'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Payment Status'
define view I_LoanPaymentStatus
  as select from dd07l
  association [0..*] to I_LoanPaymentStatusText as _Text on $projection.LoanPaymentStatus = _Text.LoanPaymentStatus
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 1) as tb_paym_status preserving type ) as LoanPaymentStatus,

      _Text
}
where
      dd07l.domname  = 'T_PAYM_STATUS'
  and dd07l.as4local = 'A'
```
