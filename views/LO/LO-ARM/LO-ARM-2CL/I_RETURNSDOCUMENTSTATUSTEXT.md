---
name: I_RETURNSDOCUMENTSTATUSTEXT
description: Returnsdocumentstatustext
app_component: LO-ARM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-ARM
  - interface-view
  - text-view
  - document
  - text
  - status
  - component:LO-ARM-2CL
  - lob:Logistics General
---
# I_RETURNSDOCUMENTSTATUSTEXT

**Returnsdocumentstatustext**

| Property | Value |
|---|---|
| App Component | `LO-ARM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ReturnsDocumentStatus` | `cast( substring(dd07t.domvalue_l, 1, 1) as msr_doc_status preserving type)` |
| key `Language` | `cast( dd07t.ddlanguage as spras preserving type )` |
| `DomainValue` | `dd07t.domvalue_l` |
| `RetsDocumentStatusDescription` | `dd07t.ddtext` |
| `_ReturnsDocumentStatus` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ReturnsDocumentStatus` | `I_ReturnsDocumentStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ObjectModel.representativeKey:'ReturnsDocumentStatus'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Returns Document Status - Text'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Analytics.dataExtraction.enabled: true 
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SEARCHABLE_ENTITY,
                                        #LANGUAGE_DEPENDENT_TEXT ]
//@AbapCatalog.entityBuffer.definitionAllowed:true
define view entity I_ReturnsDocumentStatusText
  as select from dd07t
  association [0..1] to I_ReturnsDocumentStatus as _ReturnsDocumentStatus on $projection.ReturnsDocumentStatus = _ReturnsDocumentStatus.ReturnsDocumentStatus
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
{
      //Key
      @ObjectModel.foreignKey.association: '_ReturnsDocumentStatus'
      @ObjectModel.text.element: ['RetsDocumentStatusDescription']
  key cast( substring(dd07t.domvalue_l, 1, 1) as msr_doc_status preserving type) as ReturnsDocumentStatus,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( dd07t.ddlanguage as spras preserving type )       as Language,
  
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l as DomainValue,

      //Name
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      dd07t.ddtext                                            as RetsDocumentStatusDescription,
      //Associations
      _ReturnsDocumentStatus,
      _Language
}
where
  (
    dd07t.domname  = 'MSR_DOC_STATUS'
  )
  and(
    dd07t.as4local = 'A'
  )
  and(
    dd07t.as4vers  = '0000' 
  )
 ;
```
