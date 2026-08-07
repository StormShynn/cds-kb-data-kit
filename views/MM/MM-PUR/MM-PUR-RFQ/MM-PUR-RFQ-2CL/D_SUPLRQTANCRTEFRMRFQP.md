---
name: D_SUPLRQTANCRTEFRMRFQP
description: D Suplrqtancrtefrmrfqp
app_component: MM-PUR-RFQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-RFQ
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
---
# D_SUPLRQTANCRTEFRMRFQP

**D Suplrqtancrtefrmrfqp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `RequestForQuotation` |  | |  | `vdm_requestforquotation` |
| `Supplier` |  | |  | `md_supplier` |
| `Language` |  | |  | `spras` |
| `BindingPeriodValidityEndDate` |  | |  | `ebndt` |
| `SupplierQuotationExternalID` |  | |  | `angnr` |
| `QuotationSubmissionDate` |  | |  | `ihran` |
| `FollowOnDocumentCategory` |  | |  | `followondoccat` |
| `PurgDocFollowOnDocumentType` |  | |  | `followondoctype` |
| `D_SuplrQtanCrteFrmRFQItemP` |  | |  | `_Items : composition [0..*] of D_SuplrQtanCrteFrmRFQItemP` |

## Source Code

```abap
@EndUserText.label: 'Supplr Qtn Crte from RFQ Item Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define root abstract entity D_SuplrQtanCrteFrmRFQP {


RequestForQuotation :   vdm_requestforquotation ;
Supplier    : md_supplier ;
Language   : spras ;
BindingPeriodValidityEndDate  : ebndt ;
SupplierQuotationExternalID :   angnr; 
QuotationSubmissionDate :   ihran ;
FollowOnDocumentCategory : followondoccat;
PurgDocFollowOnDocumentType :   followondoctype;
 _Items                     : composition [0..*] of D_SuplrQtanCrteFrmRFQItemP;   
 
}
```
