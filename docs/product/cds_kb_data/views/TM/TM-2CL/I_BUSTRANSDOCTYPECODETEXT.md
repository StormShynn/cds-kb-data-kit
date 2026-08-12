---
name: I_BUSTRANSDOCTYPECODETEXT
description: "Bustransdoctypecodetext"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_BUSTRANSDOCTYPECODETEXT

**Bustransdoctypecodetext**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessTransactionDocType` | ✓ | |  | `btd_tco129` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `BusinessTransactionDocTypeName` |  | |  | `description` |  |  |
| `_Language` | | ✓ | | | | |
| `_BusinessTransactionDocType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@EndUserText:   {label:                'Business Trans Doc Type Code - Text'}
@Analytics:     {dataExtraction:       {enabled: true},
                 internalName:         #LOCAL}
@ObjectModel:   {representativeKey:    'BusinessTransactionDocType',
                 dataCategory:         #TEXT,
                 usageType:            { serviceQuality: #A,
                                         sizeCategory:   #M,
                                         dataClass:      #CUSTOMIZING},
                 modelingPattern:      #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:[ #LANGUAGE_DEPENDENT_TEXT,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY]}
@Analytics.technicalName: 'IBTDTYPETEXT'
@VDM:           {viewType:               #BASIC}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl: {authorizationCheck:   #NOT_REQUIRED}
@Metadata:      {ignorePropagatedAnnotations: true}

define view entity I_BusTransDocTypeCodeText
  as select from /scmtms/c_btdtyt
  association        to parent I_BusTransDocTypeCode as _BusinessTransactionDocType on $projection.BusinessTransactionDocType = _BusinessTransactionDocType.BusinessTransactionDocType //----
  association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language
{
      //      @ObjectModel.foreignKey.association: '_BusTransDocTypeCode'
  key btd_tco129  as BusinessTransactionDocType,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras       as Language,
      @Semantics.text
      description as BusinessTransactionDocTypeName,

      /* Associations */
      //      _BusinessTransactionDocType,  //---
      _Language,
      _BusinessTransactionDocType
}
```
