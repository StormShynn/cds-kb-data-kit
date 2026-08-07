---
name: I_SERVICEPROFILETEXT
description: Serviceprofiletext
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - text-view
  - service
  - text
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEPROFILETEXT

**Serviceprofiletext**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceProfile` | ✓ | |  | `srv_serwi` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `ServiceProfileName` |  | |  | `description` |  |  |
| `_Language` | | ✓ | | | | |
| `_ServiceProfile` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ServiceProfile` | `I_ServiceProfile` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Service Profile - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISRVCPRFLTXT',
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
  representativeKey: 'ServiceProfile',
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, 
                          #CDS_MODELING_DATA_SOURCE, 
                          #SQL_DATA_SOURCE, 
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #EXTRACTION_DATA_SOURCE],
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@Search.searchable: true

define view I_ServiceProfileText
  as select from crmd_serwi_t
  association [0..1] to I_Language       as _Language       on $projection.Language = _Language.Language
  association [1..1] to I_ServiceProfile as _ServiceProfile on $projection.ServiceProfile = _ServiceProfile.ServiceProfile

{
      @ObjectModel.foreignKey.association: '_ServiceProfile'
      @ObjectModel.text.element: ['ServiceProfileName']
  key srv_serwi           as ServiceProfile,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu               as Language,
      @Search.defaultSearchElement: true 
      @Search.fuzzinessThreshold: 0.8    
      @Search.ranking: #LOW 
      @Semantics.text: true
      description         as ServiceProfileName,
      _ServiceProfile,
      _Language
}
```
