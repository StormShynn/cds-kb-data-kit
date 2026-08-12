---
name: I_SRVCITEMRELATIONSHIPTYPETEXT
description: "Service Item Relationships - Text"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCITEMRELATIONSHIPTYPETEXT')/$value
semantic_en: "Service Item Relationships - Text"
semantic_vi: "Service Item Relationships - Text — CDS view cơ bản dựa trên crms4s_item_relt."
keywords:
  - "service"
  - "item"
  - "relationships"
  - "text"
  - "srvc"
  - "relshp"
  - "type"
  - "language"
  - "name"
tags:
  - CRM
  - bo:project
  - component:CRM-S4-REP-RFW
  - CRM-S4
  - CRM-S4-REP
  - CRM-S4-REP-RFW
  - interface-view
---
# I_SRVCITEMRELATIONSHIPTYPETEXT

**Service Item Relationships - Text**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCITEMRELATIONSHIPTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SrvcItemRelshpType` | ✓ | |  | `item_relationship_type` | `CHAR(3)` | Item Relationship Type |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key of Description |
| `SrvcItemRelshpFromTypeName` |  | |  | `relationship_direction_a_name` | `CHAR(50)` | Name of Item Relationship (Forward) |
| `SrvcItemRelshpToTypeName` |  | |  | `relationship_direction_b_name` | `CHAR(50)` | Name of Item Relationship (Backward) |
| `_ItemRelationshipType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ItemRelationshipType` | `I_SrvcItemRelationshipType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCITEMRELATIONSHIPTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCITEMRELATIONSHIPTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Service Item Relationships - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISRVCDOCITEMRELT',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@AccessControl: {
  authorizationCheck: #NOT_REQUIRED,
  personalData.blocking: #('TRANSACTIONAL_DATA')
 }
@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'SrvcItemRelshpType',
   supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #S
   }
}

@Metadata.ignorePropagatedAnnotations: true
define view I_SrvcItemRelationshipTypeText
  as select from crms4s_item_relt
  association [1..1] to I_SrvcItemRelationshipType as _ItemRelationshipType on $projection.SrvcItemRelshpType = _ItemRelationshipType.SrvcItemRelshpType
  association [0..1] to I_Language                 as _Language             on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_ItemRelationshipType'
  key item_relationship_type        as SrvcItemRelshpType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key language                      as Language,
      @Semantics.text: true
      relationship_direction_a_name as SrvcItemRelshpFromTypeName,
      @Semantics.text: true
      relationship_direction_b_name as SrvcItemRelshpToTypeName,

      _ItemRelationshipType,
      _Language
}
```
