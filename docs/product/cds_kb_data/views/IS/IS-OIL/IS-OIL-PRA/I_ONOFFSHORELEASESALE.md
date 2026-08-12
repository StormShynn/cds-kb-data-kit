---
name: I_ONOFFSHORELEASESALE
description: "On Or Off Shore Lease Sale"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONOFFSHORELEASESALE')/$value
semantic_en: "On Or Off Shore Lease Sale"
semantic_vi: "On Or Off Shore Lease Sale — CDS view giao diện dựa trên dd07l."
keywords:
  - "off"
  - "shore"
  - "lease"
  - "sale"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_ONOFFSHORELEASESALE

**On Or Off Shore Lease Sale**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONOFFSHORELEASESALE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OnOrOffShoreLeaseSale` | ✓ | |  | `cast (domvalue_l as /pra/fp_on_off_shore_indicator )` | `CHAR(1)` | ONRR-2014 - On-Shore/Off-Shore Indicator |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_OnOffShoreLeaseSaleT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONOFFSHORELEASESALE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONOFFSHORELEASESALE')/$value)*

```abap
@EndUserText.label: 'On Or Off Shore Lease Sale'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVONOFFSHLEESL'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'OnOrOffShoreLeaseSale'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'ONRROnOrOffShoreLeaseInd'

define view I_OnOffShoreLeaseSale
  as select from dd07l
  association [0..*] to I_OnOffShoreLeaseSaleT as _Text on $projection.OnOrOffShoreLeaseSale = _Text.OnOrOffShoreLeaseSale
{
  @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as /pra/fp_on_off_shore_indicator )                         as OnOrOffShoreLeaseSale,
  _Text
}
where
      domname  = '/PRA/FP_ON_OFF_SHORE_INDICATOR'
  and as4local = 'A';
```
