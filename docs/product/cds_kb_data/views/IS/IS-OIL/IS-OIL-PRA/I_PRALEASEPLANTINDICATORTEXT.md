---
name: I_PRALEASEPLANTINDICATORTEXT
description: "PRA Lease Plant Indicator - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRALEASEPLANTINDICATORTEXT')/$value
semantic_en: "PRA Lease Plant Indicator - Text"
semantic_vi: "PRA Lease Plant Indicator - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "pra"
  - "lease"
  - "plant"
  - "indicator"
  - "text"
  - "language"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - plan
---
# I_PRALEASEPLANTINDICATORTEXT

**PRA Lease Plant Indicator - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRALEASEPLANTINDICATORTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IsLeaseOrPlant` | ✓ | |  | `cast (domvalue_l as oiu_lse_plt_cd )` | `CHAR(1)` | Lease Plant Code |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `IsLeaseOrPlantName` |  | |  | `cast (ddtext as oiu_vdm_lease_plant_ind_name )` | `CHAR(60)` | Lease or Plant Origin |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRALEASEPLANTINDICATORTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRALEASEPLANTINDICATORTEXT')/$value)*

```abap
@EndUserText.label: 'PRA Lease Plant Indicator - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVLSEPLANTINDT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'IsLeaseOrPlant'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_PRALeasePlantIndicatorText
  as select from dd07t

{
  @Semantics.booleanIndicator: true
  key cast (domvalue_l as oiu_lse_plt_cd )                  as IsLeaseOrPlant,
      @Semantics.language
  key cast( ddlanguage as spras )                           as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_lease_plant_ind_name )        as IsLeaseOrPlantName
}
where
      domname  = 'OIU_LSE_PLT_CD'
  and as4local = 'A';
```
