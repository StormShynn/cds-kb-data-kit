---
name: I_SERVICEPROFILE
description: "Serviceprofile"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - service
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEPROFILE

**Serviceprofile**

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
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ServiceProfileText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Service Profile'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISRVCPRFL',
  compiler.compareFilter: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel:{
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #S ,
  usageType.dataClass: #CUSTOMIZING,
  representativeKey: 'ServiceProfile',
  modelingPattern: #ANALYTICAL_DIMENSION,
  dataCategory:#VALUE_HELP,
  supportedCapabilities: [#ANALYTICAL_DIMENSION,
                          #CDS_MODELING_DATA_SOURCE,
                          #SQL_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #VALUE_HELP_PROVIDER,
                          #EXTRACTION_DATA_SOURCE]
}
@Metadata.ignorePropagatedAnnotations: true

@Consumption.ranked: true
@Search.searchable: true
@ObjectModel.sapObjectNodeType.name: 'ServiceAvailabilityProfile'
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true,
    internalName: #LOCAL
  }

define view I_ServiceProfile
  as select from crmd_serwi
  association [1..*] to I_ServiceProfileText as _Text on $projection.ServiceProfile = _Text.ServiceProfile

{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key srv_serwi as ServiceProfile,
      _Text

}
```
