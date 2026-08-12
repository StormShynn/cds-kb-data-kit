---
name: I_TRIBALALLOTTEELEASETYPE
description: "PRA Tribal Or Allottee Lease Type"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRIBALALLOTTEELEASETYPE')/$value
semantic_en: "PRA Tribal Or Allottee Lease Type"
semantic_vi: "PRA Tribal Or Allottee Lease Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "pra"
  - "tribal"
  - "allottee"
  - "lease"
  - "type"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_TRIBALALLOTTEELEASETYPE

**PRA Tribal Or Allottee Lease Type**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRIBALALLOTTEELEASETYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TribalOrAllotteeLeaseType` | ✓ | |  | `cast (domvalue_l as /pra/fp_tribal_allottee_ind )` | `CHAR(1)` | ONRR-2014 - Tribal / Allottee Indicator |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TribalAllotteeLeaseTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRIBALALLOTTEELEASETYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRIBALALLOTTEELEASETYPE')/$value)*

```abap
@EndUserText.label: 'PRA Tribal Or Allottee Lease Type'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTRALTLEASETY'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'TribalOrAllotteeLeaseType'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'ONRRTribalAllotteeCode'

define view I_TribalAllotteeLeaseType
  as select from dd07l
  association [0..*] to I_TribalAllotteeLeaseTypeText as _Text on $projection.TribalOrAllotteeLeaseType = _Text.TribalOrAllotteeLeaseType
{
  @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as /pra/fp_tribal_allottee_ind )                         as TribalOrAllotteeLeaseType,
  _Text

}
where
      domname  = 'OIUREP_MMS_2014_TRIB_ALLOT_CD'
  and as4local = 'A';
```
