---
name: I_SETLMGMTHDRTXTOBJTYPE
description: "This CDS view provides access to the list of Text Object Types which exist on header level that can be used in Settlement Management. This CDS view provides the prerequisites for answering the following business questions: What are the Text Object Types that are defined for usage on header level? How many possible Text Object Types are defined for usage on header level?"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTHDRTXTOBJTYPE')/$value
semantic_en: "This CDS view provides access to the list of Text Object Types which exist on header level that can be used in Settlement Management. This CDS view provides the prerequisites for answering the following business questions: What are the Text Object Types that are defined for usage on header level? How many possible Text Object Types are defined for usage on header level?"
semantic_vi: "Text Object Type for Header — CDS view cơ bản dựa trên ttxid."
keywords:
  - "text"
  - "object"
  - "type"
  - "for"
  - "header"
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
# I_SETLMGMTHDRTXTOBJTYPE

**This CDS view provides access to the list of Text Object Types which exist on header level that can be used in Settlement Management. This CDS view provides the prerequisites for answering the following business questions: What are the Text Object Types that are defined for usage on header level? How many possible Text Object Types are defined for usage on header level?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTHDRTXTOBJTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtHdrTxtObjType` | ✓ | |  | `cast (tdid as tdid_tech preserving type )` | `CHAR(4)` | Specific Text ID for a Settlement Management Document Header |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTHDRTXTOBJTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLMGMTHDRTXTOBJTYPE')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IWLFHDRTXTID',
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
   representativeKey: 'SettlmtMgmtHdrTxtObjType',
   modelingPattern: #NONE,
   supportedCapabilities : [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
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
@EndUserText.label: 'Text Object Type for Header' 
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: false
}


define root view I_SetlMgmtHdrTxtObjType
  as select from ttxid
  
  composition [0..*] of I_SetlMgmtHdrTxtObjTypeT as _Text  

{
        @ObjectModel.text.association: '_Text'
  key   cast (tdid as tdid_tech preserving type )         as SettlmtMgmtHdrTxtObjType,

       //Associations
        _Text
}
where
  tdobject = 'WBRK'
```
