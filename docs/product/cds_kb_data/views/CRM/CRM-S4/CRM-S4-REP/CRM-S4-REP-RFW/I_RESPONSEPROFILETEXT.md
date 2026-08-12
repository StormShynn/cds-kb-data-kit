---
name: I_RESPONSEPROFILETEXT
description: "Responseprofiletext"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - text-view
  - text
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_RESPONSEPROFILETEXT

**Responseprofiletext**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ResponseProfile` | ✓ | |  | `srv_escal` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `ServiceProfileName` |  | |  | `description` |  |  |
| `_Language` | | ✓ | | | | |
| `_ResponseProfile` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ResponseProfile` | `I_ResponseProfile` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Response Profile - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'IRSPPRFLTXT',
  compiler.compareFilter: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel:{
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #S ,
  usageType.dataClass: #CUSTOMIZING,
  dataCategory: #TEXT,
  representativeKey: 'ResponseProfile',
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, 
                          #CDS_MODELING_DATA_SOURCE, 
                          #SQL_DATA_SOURCE, 
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #EXTRACTION_DATA_SOURCE],
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}

@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true

@Search.searchable: true

define view I_ResponseProfileText
  as select from crmd_escal_t
  association [0..1] to I_Language        as _Language        on $projection.Language = _Language.Language
  association [1..1] to I_ResponseProfile as _ResponseProfile on $projection.ResponseProfile = _ResponseProfile.ResponseProfile
{
      @ObjectModel.foreignKey.association: '_ResponseProfile'
      @ObjectModel.text.element: ['ServiceProfileName']
  key srv_escal           as ResponseProfile,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key langu               as Language,
      @Search.defaultSearchElement: true 
      @Search.fuzzinessThreshold: 0.8    
      @Search.ranking: #LOW             
      @Semantics.text: true              
      description         as ServiceProfileName,
      _ResponseProfile,
      _Language
}
```
