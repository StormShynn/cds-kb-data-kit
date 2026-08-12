---
name: I_SETLMGMTITMTXTOBJTYPE
description: "This CDS view provides access to the list of Text Object Types which exist on item level and which can be used in Settlement Management. This CDS view provides the prerequisites for answering the following business question: How many possible Text Object Types are defined for item level?"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTITMTXTOBJTYPE')/$value
semantic_en: "This CDS view provides access to the list of Text Object Types which exist on item level and which can be used in Settlement Management. This CDS view provides the prerequisites for answering the following business question: How many possible Text Object Types are defined for item level?"
semantic_vi: "Text Object Type for Item — CDS view cơ bản dựa trên ttxid."
keywords:
  - "text"
  - "object"
  - "type"
  - "for"
  - "item"
  - "settlmt"
  - "mgmt"
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETLMGMTITMTXTOBJTYPE

**This CDS view provides access to the list of Text Object Types which exist on item level and which can be used in Settlement Management. This CDS view provides the prerequisites for answering the following business question: How many possible Text Object Types are defined for item level?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTITMTXTOBJTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtItmTxtObjType` | ✓ | |  | `cast (tdid as tdid_teci preserving type )` | `CHAR(4)` | Specific Text ID for a Settlement Management Document Item |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTITMTXTOBJTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTITMTXTOBJTYPE')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IWLFITMTXTID',
  compiler.compareFilter: true,
  buffering: {
    status: #ACTIVE,
    type: #SINGLE,
    numberOfKeyFields: 001
  },
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  privilegedAssociations: [ '_Text' ],
  personalData.blocking: #NOT_REQUIRED
}
@ObjectModel: {
   representativeKey: 'SettlmtMgmtItmTxtObjType',
   modelingPattern: #NONE,
   supportedCapabilities : [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #S
   }
}
@ClientHandling: {
     type: #INHERITED,
     algorithm: #SESSION_VARIABLE
}
@Analytics: {
//    dataCategory: #DIMENSION,
    dataExtraction.enabled: false,
    internalName: #LOCAL
}
@EndUserText.label: 'Text Object Type for Item' 
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: false
}

define root view I_SetlMgmtItmTxtObjType
  as select from ttxid
  
  composition [0..*] of I_SetlMgmtItmTxtObjTypeT as _Text    

{
        @ObjectModel.text.association: '_Text'
  key   cast (tdid as tdid_teci preserving type ) as SettlmtMgmtItmTxtObjType,

        //Associations
        _Text
}
where
  tdobject = 'WBRP'
```
