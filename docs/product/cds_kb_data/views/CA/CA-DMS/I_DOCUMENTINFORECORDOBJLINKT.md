---
name: I_DOCUMENTINFORECORDOBJLINKT
description: "Documentinforecordobjlinkt"
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
  - document
  - component:CA-DMS
  - lob:Cross-Application Components
---
# I_DOCUMENTINFORECORDOBJLINKT

**Documentinforecordobjlinkt**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |  |  |
| `LinkedSAPObject` | ✓ | |  | `dokob` |  |  |
| `ObjectDescription` |  | |  | `ktxt` |  |  |
| `ObjectType` |  | |  | `objab` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCOBJLINKT'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Document Info Record Object Link - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type : #INHERITED
@ObjectModel.representativeKey: 'LinkedSAPObject'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #CUSTOMIZING }
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@Metadata.ignorePropagatedAnnotations: true

define view I_DocumentInfoRecordObjLinkT
  as select from tdwot

    association [0..1] to I_Language                as _Language on $projection.Language = _Language.Language
    
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key tdwot.langu as Language,
  @ObjectModel.text.element:[ 'ObjectDescription' ]
  key tdwot.dokob as LinkedSAPObject,
      @Semantics.text: true
      tdwot.ktxt  as ObjectDescription,
      tdwot.objab as ObjectType,
      
      //Associations
      _Language
}
```
