---
name: I_MATERIALDOCUMENTPOSTINGTYPE
description: Materialdocumentpostingtype
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - material
  - document
  - component:MM-IM-VDM-SGM-2CL
  - lob:Sourcing & Procurement
  - bo:Material
---
# I_MATERIALDOCUMENTPOSTINGTYPE

**Materialdocumentpostingtype**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialDocumentPostingType` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as kzsto)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MaterialDocumentPostgTypeTxt` | [0..*] |

## Source Code

```abap
@Analytics: { technicalName: 'IMatlDocPostgTp',
              dataExtraction.enabled:true,
              dataCategory: #DIMENSION,
              internalName:#LOCAL }

@EndUserText.label: 'Material Document Posting Type'

@Consumption.ranked: true

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #VALUE_HELP,
                modelingPattern: #ANALYTICAL_DIMENSION,
                representativeKey: 'MaterialDocumentPostingType',
                resultSet.sizeCategory: #XS,
                supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY,
                                        #SQL_DATA_SOURCE,
                                        #VALUE_HELP_PROVIDER],
                usageType: { serviceQuality: #A,
                             dataClass: #META,
                             sizeCategory: #S },
                sapObjectNodeType.name: 'MaterialDocumentPostingType' }

@Search.searchable: true

@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC }
define view entity I_MaterialDocumentPostingType
  as select from dd07l

  association [0..*] to I_MaterialDocumentPostgTypeTxt as _Text on $projection.MaterialDocumentPostingType = _Text.MaterialDocumentPostingType
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
  key cast(substring(domvalue_l, 1, 1) as kzsto) as MaterialDocumentPostingType,

      //Associations
      _Text

}
where
       domname    =  'KZSTO'
  and  as4local   =  'A'
  and(
       valpos     =  '0001'
    or valpos     =  '0002'
    or valpos     =  '0003'
  )
  and  as4vers    =  '0000'
  and  domvalue_l <> '3';
```
