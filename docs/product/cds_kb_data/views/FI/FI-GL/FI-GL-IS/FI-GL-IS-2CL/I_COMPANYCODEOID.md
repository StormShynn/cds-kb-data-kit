---
name: I_COMPANYCODEOID
description: "The Global ID of a Company Code"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPANYCODEOID')/$value
semantic_en: "The Global ID of a Company Code"
semantic_vi: "The Global ID of a Company Code — CDS view giao diện dựa trên t001_oids."
keywords:
  - "the"
  - "global"
  - "company"
  - "code"
  - "name"
tags:
  - FI
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - bo:companycode
---
# I_COMPANYCODEOID

**The Global ID of a Company Code**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPANYCODEOID')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  | `butxt` | `CHAR(25)` | Name of Company Code or Company |
| `CompanyCodeOID` |  | |  | `oid` | `CHAR(128)` | MDI Business Object Instance ID |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPANYCODEOID')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPANYCODEOID')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'The Global ID of a Company Code'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'CompanyCode'
@ObjectModel: { usageType.sizeCategory: #S,
                usageType.dataClass:  #ORGANIZATIONAL,
                usageType.serviceQuality: #A,
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY ]  }

@Search.searchable: true


define view entity I_CompanyCodeOID
  as select from t001_oids as t001_oids
    inner join   t001      as t001 on t001_oids.bukrs = t001.bukrs

{
       @Search.defaultSearchElement:true
       @Search.fuzzinessThreshold:0.8
       @Search.ranking:#HIGH
  key  t001_oids.bukrs as CompanyCode,

       @Semantics.text
       @Search.defaultSearchElement: true
       @Search.fuzzinessThreshold: 0.8
       @Search.ranking: #HIGH
       t001.butxt      as CompanyCodeName,

       t001_oids.oid   as CompanyCodeOID

}
```
