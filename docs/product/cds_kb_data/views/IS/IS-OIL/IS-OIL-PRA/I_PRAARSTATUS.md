---
name: I_PRAARSTATUS
description: "PRA Accounts Receivable Status"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAARSTATUS')/$value
semantic_en: "PRA Accounts Receivable Status"
semantic_vi: "PRA Accounts Receivable Status — CDS view giao diện dựa trên dd07l."
keywords:
  - "pra"
  - "accounts"
  - "receivable"
  - "status"
  - "accts"
tags:
  - IS
  - account
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRAARSTATUS

**PRA Accounts Receivable Status**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAARSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AcctsRblStatus` | ✓ | |  | `cast (domvalue_l as oiuar_status )` | `CHAR(2)` | Accounts Receivable Status |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRAARStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAARSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAARSTATUS')/$value)*

```abap
@EndUserText.label: 'PRA Accounts Receivable Status'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVARSTATUS'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'AcctsRblStatus'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRAAcctRblStatus'
define view I_PRAARStatus
  as select from dd07l
  association [0..*] to I_PRAARStatusText as _Text on $projection.AcctsRblStatus = _Text.AcctsRblStatus
{
      @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as oiuar_status ) as AcctsRblStatus,
      _Text
}
where
      domname  = 'OIUAR_STATUS'
  and as4local = 'A';
```
