---
name: I_PRATAXNMENTITYAFFILIATIONCD
description: "New Mexico Entity Affiliation Code"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNMENTITYAFFILIATIONCD')/$value
semantic_en: "New Mexico Entity Affiliation Code"
semantic_vi: "New Mexico Entity Affiliation Code — CDS view giao diện dựa trên dd07l."
keywords:
  - "new"
  - "mexico"
  - "entity"
  - "affiliation"
  - "code"
tags:
  - IS
  - bo:companycode
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRATAXNMENTITYAFFILIATIONCD

**New Mexico Entity Affiliation Code**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNMENTITYAFFILIATIONCD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EntityAffiliationCode` | ✓ | |  | `cast (domvalue_l as oiux8_nm_affiliation_code )` | `CHAR(2)` | Tax 2.0 - NM - Affilication Code |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRATaxNMEntityAffiliationCdT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNMENTITYAFFILIATIONCD')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNMENTITYAFFILIATIONCD')/$value)*

```abap
@EndUserText.label: 'New Mexico Entity Affiliation Code'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXNMENTAFCD'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'EntityAffiliationCode'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRANewMexicoTaxAffiliationCode'

define view I_PRATaxNMEntityAffiliationCd
  as select from dd07l
  association [0..*] to I_PRATaxNMEntityAffiliationCdT as _Text on $projection.EntityAffiliationCode = _Text.EntityAffiliationCode
{
      @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as oiux8_nm_affiliation_code ) as EntityAffiliationCode,
      _Text
}
where
      domname  = 'OIUX8_NM_AFFILIATION_CODE'
  and as4local = 'A';
```
