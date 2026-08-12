---
name: I_PRATAXNMENTITYAFFILIATIONCDT
description: "New Mexico Entity Affiliation Cd - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNMENTITYAFFILIATIONCDT')/$value
semantic_en: "New Mexico Entity Affiliation Cd - Text"
semantic_vi: "New Mexico Entity Affiliation Cd - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "new"
  - "mexico"
  - "entity"
  - "affiliation"
  - "text"
  - "code"
  - "language"
  - "name"
tags:
  - IS
  - bo:companycode
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRATAXNMENTITYAFFILIATIONCDT

**New Mexico Entity Affiliation Cd - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNMENTITYAFFILIATIONCDT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EntityAffiliationCode` | ✓ | |  | `cast (domvalue_l as oiux8_nm_affiliation_code )` | `CHAR(2)` | Tax 2.0 - NM - Affilication Code |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `EntityAffiliationCodeName` |  | |  | `cast (ddtext as oiu_vdm_nm_affiliation_cd_name )` | `CHAR(60)` | New Mexico Affiliation Code Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNMENTITYAFFILIATIONCDT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNMENTITYAFFILIATIONCDT')/$value)*

```abap
@EndUserText.label: 'New Mexico Entity Affiliation Cd - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXNMENTAFCDT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'EntityAffiliationCode'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_PRATaxNMEntityAffiliationCdT
  as select from dd07t
{
  key cast (domvalue_l as oiux8_nm_affiliation_code )                as EntityAffiliationCode,
      @Semantics.language
  key cast( ddlanguage as spras )                                    as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_nm_affiliation_cd_name )               as EntityAffiliationCodeName
}
where
      domname  = 'OIUX8_NM_AFFILIATION_CODE'
  and as4local = 'A';
```
