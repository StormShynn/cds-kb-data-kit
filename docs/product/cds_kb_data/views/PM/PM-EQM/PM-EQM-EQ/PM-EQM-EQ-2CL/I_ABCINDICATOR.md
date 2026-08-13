---
name: I_ABCINDICATOR
description: "Abcindicator"
semantic_vi: "View Abcindicator cung cấp truy cập dữ liệu chỉ số ABC, được sử dụng để ưu tiên hoạt động bảo trì trong bảo trì nhà máy. Nó được sử dụng để lấy thông tin chỉ số ABC để phân tích và báo cáo."
keywords:
  - "abc indicator"
  - "plant maintenance"
  - "bảo trì nhà máy"
  - "chỉ số abc"
  - "activity priority"
  - "truy vấn dữ liệu"
  - "data retrieval"
  - "sap pm"
  - "bảo trì"
  - "maintenance"
  - "activity prioritization"
semantic_en: "The Abcindicator view provides access to ABC indicator data, which is used to prioritize maintenance activities in plant maintenance. It is used to retrieve ABC indicator information for analysis and reporting purposes."
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - interface-view
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_ABCINDICATOR

**Abcindicator**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ABCIndicator` | ✓ | |  | `abckz` |  |  |
| `ABCIndicatorCodeOID` |  | |  | `cast( t370c.abckz as abcindicator_oid )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ABCIndicatorText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IABCINDICATOR'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'ABC Indicator'
@ObjectModel.representativeKey: 'ABCIndicator'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.semanticKey:  [ 'ABCIndicator' ]
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@VDM.viewType: #BASIC

@Metadata.ignorePropagatedAnnotations
@Search.searchable: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.alternativeKey:[{id:'OID',element:['ABCIndicatorCodeOID']}] 
//@ObjectModel.sapObjectNodeType.name:'ABCIndicatorCode' 
@ObjectModel.objectIdentifier.oidElement:'ABCIndicatorCodeOID' 
define view I_ABCIndicator
  as select from           t370c
  association [0..*] to I_ABCIndicatorText as _Text on $projection.ABCIndicator = _Text.ABCIndicator
{

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key t370c.abckz as ABCIndicator,
      @ObjectModel.filter.enabled:false
      @ObjectModel.sort.enabled:false
      
      cast( t370c.abckz as abcindicator_oid ) as ABCIndicatorCodeOID, //use your own OID field name


      _Text
}
```
