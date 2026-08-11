---
name: I_CMMDTYPRICEFIXATIONSTATUS
description: "Commodity Price Fixation Status"
app_component: FIN-FSCM-CMM-RSK
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYPRICEFIXATIONSTATUS')/$value
semantic_en: "Commodity Price Fixation Status"
semantic_vi: "Commodity Price Fixation Status — CDS view giao diện dựa trên dd07l."
keywords:
  - "commodity"
  - "price"
  - "fixation"
  - "status"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CMM-RSK
  - FIN-FSCM
  - FIN-FSCM-CMM
  - FIN-FSCM-CMM-RSK
  - interface-view
  - lob:finance
  - lob:sourcing & procurement
---
# I_CMMDTYPRICEFIXATIONSTATUS

**Commodity Price Fixation Status**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CMM-RSK` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYPRICEFIXATIONSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CommodityPriceFixationStatus` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as ftr_fixing_status )` | `CHAR(1)` | Fixation Status (OBSOLETE) |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CmmdtyPriceFixationStatusT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYPRICEFIXATIONSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYPRICEFIXATIONSTATUS')/$value)*

```abap
@EndUserText.label: 'Commodity Price Fixation Status'
@Analytics.dataCategory:#DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ICMMDTYPRFIXSTS'
@ObjectModel.representativeKey: 'CommodityPriceFixationStatus'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities:  [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey: true

define view I_CmmdtyPriceFixationStatus
   as select from dd07l
    association [0..*] to I_CmmdtyPriceFixationStatusT as _Text
      on $projection.CommodityPriceFixationStatus = _Text.CommodityPriceFixationStatus
{
@ObjectModel.text.association: '_Text'
    key cast ( substring( domvalue_l, 1, 1 ) as ftr_fixing_status ) as CommodityPriceFixationStatus,
    _Text
}
where domname  = 'FTR_FIXING_STATUS'
  and as4local = 'A'
```
