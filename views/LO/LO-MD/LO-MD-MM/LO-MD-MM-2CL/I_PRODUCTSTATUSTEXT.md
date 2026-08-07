---
name: I_PRODUCTSTATUSTEXT
description: Productstatustext
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - text-view
  - product
  - text
  - status
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTSTATUSTEXT

**Productstatustext**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Status` | ✓ | |  | `mmsta` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `MaterialUsabilityProfileName` |  | |  | `cast(t141t.mtstb as crossplantstatustext preserving type )` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRDSTATUST'
@Analytics: {
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
    }
@VDM:{
    lifecycle: {
      status: #DEPRECATED,
      successor: 'I_ProductProfileCodeText'
 }}
@ObjectModel.dataCategory: #TEXT
//@ClientDependent: true
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Cross-Plant Product Status - Text'
@Search.searchable: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'Status'

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #SEARCHABLE_ENTITY,
                                      #EXTRACTION_DATA_SOURCE
  ]

define view I_ProductStatusText
  as select from t141t
{
  key t141t.mmsta                                                as Status,
      @Semantics.language: true
  key spras                                                      as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      cast(t141t.mtstb as crossplantstatustext preserving type ) as MaterialUsabilityProfileName
}
```
