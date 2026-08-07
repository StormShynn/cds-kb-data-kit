---
name: I_TRANSPSCACCODETEXT
description: Transpscaccodetext
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - text-view
  - text
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPSCACCODETEXT

**Transpscaccodetext**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspSCACCode` | ✓ | |  | `scac` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `TranspSCACCodeDesc` |  | |  | `cast(text as /scmtms/vdm_scac_desc preserving type)` |  |  |
| `_Language` | | ✓ | | | | |
| `_TranspSCACCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@EndUserText:   {label: 'Transportation SCAC Code - Text'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:     'TranspSCACCode',
                 dataCategory:          #TEXT,
                 usageType:             {serviceQuality: #A,
                                         sizeCategory:   #S,
                                         dataClass:      #CUSTOMIZING},
                 modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #SEARCHABLE_ENTITY]}
@Analytics.technicalName: 'ITSCACCTEXT'
@VDM:           {viewType:           #BASIC}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Metadata:      {ignorePropagatedAnnotations: true}

define view entity I_TranspSCACCodeText
  as select from /scmtms/c_scac_t

  association to parent I_TranspSCACCode as _TranspSCACCode on $projection.TranspSCACCode = _TranspSCACCode.TranspSCACCode
  association [0..1] to I_Language       as _Language       on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspSCACCode'
  key scac                                                as TranspSCACCode,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                               as Language,
      @Semantics.text
      cast(text as /scmtms/vdm_scac_desc preserving type) as TranspSCACCodeDesc,

      /* Associations */
      _TranspSCACCode,
      _Language
}
```
