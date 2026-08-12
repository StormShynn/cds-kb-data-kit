---
name: I_PRAACCOUNTINGDOCSTATUS
description: "PRA Accouting Document Status"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCOUNTINGDOCSTATUS')/$value
semantic_en: "PRA Accouting Document Status"
semantic_vi: "PRA Accouting Document Status — CDS view giao diện dựa trên dd07l."
keywords:
  - "pra"
  - "accouting"
  - "document"
  - "status"
  - "accounting"
tags:
  - IS
  - component:IS-OIL-PRA
  - document
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRAACCOUNTINGDOCSTATUS

**PRA Accouting Document Status**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCOUNTINGDOCSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccountingDocumentStatus` | ✓ | |  | `cast (domvalue_l as /pra/acct_doc_status )` | `CHAR(2)` | Accounting Document Status |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRAAccountingDocStatusT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCOUNTINGDOCSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCOUNTINGDOCSTATUS')/$value)*

```abap
@EndUserText.label: 'PRA Accouting Document Status'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVACTGDSATUS'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'AccountingDocumentStatus'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRAAccountingDocStatus'
define view I_PRAAccountingDocStatus
  as select from dd07l
  association [0..*] to I_PRAAccountingDocStatusT as _Text on $projection.AccountingDocumentStatus = _Text.AccountingDocumentStatus
{
      @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as /pra/acct_doc_status ) as AccountingDocumentStatus,
      _Text
}
where
      domname  = '/PRA/ACCT_DOC_STATUS'
  and as4local = 'A';
```
