---
name: I_CMMDTYMTMMESSAGE
description: "Messages relevant for Mark To Market"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYMTMMESSAGE')/$value
semantic_en: "Messages relevant for Mark To Market"
semantic_vi: "Messages relevant for MTM — CDS view giao diện dựa trên t100."
keywords:
  - "messages"
  - "relevant"
  - "for"
  - "mtm"
  - "system"
  - "message"
  - "number"
  - "language"
  - "text"
tags:
  - LO
  - component:LO-CMM-BF
  - interface-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
---
# I_CMMDTYMTMMESSAGE

**Messages relevant for Mark To Market**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYMTMMESSAGE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SystemMessageNumber` | ✓ | |  | `msgnr` | `CHAR(3)` | Message number |
| `Language` | ✓ | |  | `sprsl` | `LANG(1)` | Language Key |
| `SystemMessageText` |  | |  | `text` | `CHAR(73)` | Message Text |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYMTMMESSAGE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYMTMMESSAGE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IMTMMESSAGE'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SystemMessageNumber'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@EndUserText.label: 'Messages relevant for MTM'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations:true


define view I_CmmdtyMtmMessage as select from t100 
{

   key msgnr as SystemMessageNumber,
    @Semantics.language: true
   key sprsl as Language,
    @Semantics.text: true
   text as SystemMessageText
        
}
where arbgb = 'CMM_MTMCDS'  
and sprsl = $session.system_language
```
