---
name: I_EWM_FIRECONTAINMENTSCTNTEXT
description: "Fire Containment Section - Text"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_FIRECONTAINMENTSCTNTEXT')/$value
semantic_en: "Fire Containment Section - Text"
semantic_vi: "Fire Containment Section - Text — CDS view giao diện (master data) dựa trên Fire Containment Section - Text."
keywords:
  - "fire"
  - "containment"
  - "section"
  - "text"
  - "language"
  - "warehouse"
  - "desc"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# I_EWM_FIRECONTAINMENTSCTNTEXT

**Fire Containment Section - Text**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_FIRECONTAINMENTSCTNTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `EWMWarehouse` | ✓ | |  | `lgnum` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMFireContainmentSection` | ✓ | |  | `brand` | `CHAR(2)` | Fire-Containment Section |
| `EWMFireContainmentSectionDesc` |  | |  | `cast(brant as ewm_de_firecontainmsectndesc preserving type)` | `CHAR(40)` | Fire Containment Section Description |
| `_Warehouse` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Warehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_FIRECONTAINMENTSCTNTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_FIRECONTAINMENTSCTNTEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Fire Containment Section - Text'

@VDM.viewType:#BASIC

@ObjectModel.representativeKey: 'EWMFireContainmentSection'
@Analytics.technicalName: 'IEWMFRCNTMSCTTXT'
@ObjectModel: {dataCategory: #TEXT,
               usageType: {serviceQuality: #A,
                           dataClass: #MASTER,
                           sizeCategory: #M}}
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT 
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
define view entity I_EWM_FireContainmentSctnText
  as select from /scwm/t309t
  association [0..1] to I_EWM_WarehouseNumber_2 as _Warehouse on $projection.EWMWarehouse = _Warehouse.EWMWarehouse

{
      @Semantics.language: true
  key spras                                                       as Language,
      @ObjectModel.foreignKey.association: '_Warehouse'
  key lgnum                                                       as EWMWarehouse,
  key brand                                                       as EWMFireContainmentSection,
      @Search:{
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #HIGH }
      @Semantics.text: true
      cast(brant as ewm_de_firecontainmsectndesc preserving type) as EWMFireContainmentSectionDesc,
      _Warehouse
}
```
