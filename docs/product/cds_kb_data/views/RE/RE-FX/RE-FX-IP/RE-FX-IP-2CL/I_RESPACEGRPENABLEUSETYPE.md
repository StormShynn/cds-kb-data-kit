---
name: I_RESPACEGRPENABLEUSETYPE
description: "Real Estate Space Group Enable Use Type"
app_component: RE-FX-IP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPACEGRPENABLEUSETYPE')/$value
semantic_en: "Real Estate Space Group Enable Use Type"
semantic_vi: "Real Estate Space Group Enable Use Type — CDS view giao diện dựa trên tivipsgenusetype."
keywords:
  - "real"
  - "estate"
  - "space"
  - "group"
  - "enable"
  - "use"
  - "type"
tags:
  - RE
  - component:RE-FX-IP-2CL
  - interface-view
  - RE-FX
  - RE-FX-IP
  - RE-FX-IP-2CL
  - bo:project
---
# I_RESPACEGRPENABLEUSETYPE

**Real Estate Space Group Enable Use Type**

| Property | Value |
|---|---|
| App Component | `RE-FX-IP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPACEGRPENABLEUSETYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RESpaceGrpEnableUseType` | ✓ | |  | `iosgenableusetype` | `CHAR(4)` | Usage Enablement Type |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPACEGRPENABLEUSETYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESPACEGRPENABLEUSETYPE')/$value)*

```abap
@EndUserText.label: 'Real Estate Space Group Enable Use Type'
@AbapCatalog.sqlViewName: 'IREIOENUSTYPE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.representativeKey: 'RESpaceGrpEnableUseType'
@ObjectModel.semanticKey: ['RESpaceGrpEnableUseType' ]
//@ClientDependent: true
@VDM.viewType: #BASIC
@Search.searchable: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP

@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY,
                                        #VALUE_HELP_PROVIDER,
                                        #EXTRACTION_DATA_SOURCE                  ]
@Analytics:{
    dataExtraction: {
        enabled: true }
//    dataCategory: #DIMENSION,
//    internalName:#LOCAL
}

define root view I_RESpaceGrpEnableUseType
  as select from tivipsgenusetype
  composition [0..*] of I_RESpaceGrpEnableUseTypeText as _Text
  //  association [0..*] to I_RESpaceGrpEnableUseTypeText as _Text on $projection.RESpaceGrpEnableUseType = _Text.RESpaceGrpEnableUseType
{
      @Search.ranking: #HIGH
      @Search.defaultSearchElement: true
      @ObjectModel.text.association: '_Text'
  key iosgenableusetype as RESpaceGrpEnableUseType,
      _Text

}
```
