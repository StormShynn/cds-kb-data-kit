---
name: I_PRODUCTPROFILECODETEXT
description: Productprofilecodetext
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
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTPROFILECODETEXT

**Productprofilecodetext**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProductProfileCode` | ✓ | |  | `cast( t141t.mmsta as mmsta preserving type )` |
| `Language` | ✓ | |  | `cast( spras as spras preserving type )` |
| `ProductProfileCodeName` |  | |  | `cast(t141t.mtstb as crossplantstatustext preserving type )` |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Product Profile Code - Text'
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.entityBuffer.definitionAllowed: true

@ObjectModel:{
usageType:{
  serviceQuality: #A,
  sizeCategory: #M,
  dataClass: #CUSTOMIZING
},
representativeKey: 'ProductProfileCode',
dataCategory: #TEXT,
modelingPattern:#LANGUAGE_DEPENDENT_TEXT,
sapObjectNodeType.name:'ProductProfileCodeText'}

@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #SEARCHABLE_ENTITY,
                                      #EXTRACTION_DATA_SOURCE
  ]
@Analytics: {
   dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
}
@VDM.viewType: #BASIC
@Search.searchable: true 
define view entity I_ProductProfileCodeText as select from t141t
{
  key cast( t141t.mmsta as mmsta preserving type )               as ProductProfileCode,
      @Semantics.language: true
  key cast( spras as spras preserving type )                     as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      cast(t141t.mtstb as crossplantstatustext preserving type ) as ProductProfileCodeName
}
```
