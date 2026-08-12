---
name: I_DOCINFORECDOBJTYPETODOCTYPE
description: "Docinforecdobjtypetodoctype"
app_component: CA-DMS
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-DMS
  - interface-view
  - component:CA-DMS
  - lob:Cross-Application Components
---
# I_DOCINFORECDOBJTYPETODOCTYPE

**Docinforecdobjtypetodoctype**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DocumentInfoRecordDocType` | ✓ | |  | `dokar` |  |  |
| `LinkedSAPObject` | ✓ | |  | `dokob` |  |  |
| `ConfigDeprecationCode` |  | |  | `configdeprecationcode` |  |  |
| `_Text` | | ✓ | | | | |
| `_DocType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_DocumentInfoRecordDocTypeT` | [0..*] |
| `_DocType` | `I_DocumentInfoRecordDocType` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCTYPEOBJ'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@EndUserText.label: 'Document types associated to object type'
@ObjectModel.compositionRoot:true 
@ObjectModel.representativeKey: 'LinkedSAPObject'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'LinkedSAPObject'
@Search.searchable: true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #GENERIC
@AbapCatalog.buffering.numberOfKeyFields: 001
@Analytics: {

              dataExtraction.enabled: true }
              
@ObjectModel: {
                           
         modelingPattern: #ANALYTICAL_DIMENSION,
         supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
                }
@Metadata: {
             allowExtensions: true,
             ignorePropagatedAnnotations: true
           }

define view I_DocInfoRecdObjTypeToDocType
  as select from tdwo
  association [0..*] to I_DocumentInfoRecordDocTypeT as _Text on $projection.DocumentInfoRecordDocType = _Text.DocumentInfoRecordDocType
  
  association [0..1] to I_DocumentInfoRecordDocType as _DocType on $projection.DocumentInfoRecordDocType = _DocType.DocumentInfoRecordDocType
  
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      @ObjectModel.foreignKey.association: '_DocType'
      @ObjectModel.text.association: '_Text'
  key tdwo.dokar  as DocumentInfoRecordDocType,
  key tdwo.dokob  as LinkedSAPObject,
      tdwo.configdeprecationcode as ConfigDeprecationCode,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text,
      
      _DocType
           
}
where
  configdeprecationcode <> 'E'
```
