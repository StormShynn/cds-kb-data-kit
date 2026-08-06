---
name: I_PRODNRSCETOOLTEXT
description: Prodnrscetooltext
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - text-view
  - text
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_PRODNRSCETOOLTEXT

**Prodnrscetooltext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ProductionResourceType` | `PRT.ProductionResourceType` |
| key `ProductionResourceInternalID` | `PRT.ProductionResourceInternalID` |
| key `Language` | `I_Language.Language` |
| `ProductionResourceToolDesc` | `cast( case PRT.ProdnRsceToolCategory when 'M' then I_MaterialText.MaterialName when 'E' then I_EquipmentText.EquipmentName when 'S' then I_MiscProdnRsceToolText.MiscProductionResourceToolDesc when 'D' then I_DocumentInfoRecordDesc.DocumentDescription when 'P' then I_MeasuringPoint.MeasuringPointDescription else ' ' end as fhktx preserving type)` |
| `ProductionResourceTool` | `cast( case PRT.ProdnRsceToolCategory when 'M' then PRT.Material when 'E' then PRT.Equipment when 'S' then PRT.MiscProductionResourceTool when 'D' then concat_with_space(concat_with_space(concat_with_space( PRT.DocumentInfoRecord, PRT.DocumentType, 1), PRT.DocumentPart, 1), PRT.DocumentVersion, 1) when 'P' then PRT.MeasuringPoint else ' ' end as pph_fhmnr preserving type)` |
| `ProdnRsceToolCategory` | `cast(PRT.ProdnRsceToolCategory as mpe_fhmar preserving type)` |
| `DocumentType` | `PRT.DocumentType` |
| `DocumentInfoRecord` | `PRT.DocumentInfoRecord` |
| `DocumentVersion` | `PRT.DocumentVersion` |
| `DocumentPart` | `PRT.DocumentPart` |
| `_ProductionResourceType` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductionResourceType` | `I_ProductionResourceType` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPPRTIKTEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.representativeKey: 'ProductionResourceInternalID'
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #MIXED}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Production Resource Tool - Text'

define view I_ProdnRsceToolText
  as select from           I_ProdnRsceToolByInternalKey as PRT
    inner join             I_Language               on Language <> ''

    left outer to one join I_MaterialText           on  I_MaterialText.Material = PRT.Material
                                                    and I_MaterialText.Language = I_Language.Language

    left outer to one join I_EquipmentText          on  I_EquipmentText.Equipment = PRT.Equipment
                                                    and I_EquipmentText.Language  = I_Language.Language

    left outer to one join I_MiscProdnRsceToolText  on  I_MiscProdnRsceToolText.ProductionResourceType       = PRT.ProductionResourceType
                                                    and I_MiscProdnRsceToolText.ProductionResourceInternalID = PRT.ProductionResourceInternalID
                                                    and I_MiscProdnRsceToolText.Language                     = I_Language.Language

    left outer to one join I_DocumentInfoRecordDesc on  I_DocumentInfoRecordDesc.DocumentInfoRecordDocType    = PRT.DocumentType
                                                    and I_DocumentInfoRecordDesc.DocumentInfoRecordDocNumber  = PRT.DocumentInfoRecord
                                                    and I_DocumentInfoRecordDesc.DocumentInfoRecordDocVersion = PRT.DocumentVersion
                                                    and I_DocumentInfoRecordDesc.DocumentInfoRecordDocPart    = PRT.DocumentPart
                                                    and I_DocumentInfoRecordDesc.Language                     = I_Language.Language

    left outer to one join I_MeasuringPoint         on I_MeasuringPoint.MeasuringPoint = PRT.MeasuringPoint

  association [1..1] to I_ProductionResourceType as _ProductionResourceType on $projection.ProductionResourceType = _ProductionResourceType.ProductionResourceType
  association [1..1] to I_Language               as _Language               on $projection.Language = _Language.Language

{
      // Key
      @ObjectModel.foreignKey.association: '_ProductionResourceType'
  key PRT.ProductionResourceType,
      @ObjectModel.text.element: 'ProductionResourceToolDesc'
  key PRT.ProductionResourceInternalID,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key I_Language.Language,

      // Text
      @Semantics.text: true
      cast(
        case PRT.ProdnRsceToolCategory
          when 'M' then I_MaterialText.MaterialName
          when 'E' then I_EquipmentText.EquipmentName
          when 'S' then I_MiscProdnRsceToolText.MiscProductionResourceToolDesc
          when 'D' then I_DocumentInfoRecordDesc.DocumentDescription
          when 'P' then I_MeasuringPoint.MeasuringPointDescription
          else ' '
        end as fhktx preserving type)                              as ProductionResourceToolDesc,

      // Semantic Key
      cast(
        case PRT.ProdnRsceToolCategory
          when 'M' then PRT.Material
          when 'E' then PRT.Equipment
          when 'S' then PRT.MiscProductionResourceTool
          when 'D' then concat_with_space(concat_with_space(concat_with_space(
                        PRT.DocumentInfoRecord, PRT.DocumentType, 1), PRT.DocumentPart, 1), PRT.DocumentVersion, 1)
          when 'P' then PRT.MeasuringPoint
          else ' '
        end as pph_fhmnr preserving type)                          as ProductionResourceTool,
      @ObjectModel.foreignKey.association: '_ProdnRsceToolCategory'
      cast(PRT.ProdnRsceToolCategory as mpe_fhmar preserving type) as ProdnRsceToolCategory,

      //Fields identifying document PRTs
      @ObjectModel.foreignKey.association: '_DocumentType'
      PRT.DocumentType,
      @ObjectModel.foreignKey.association: '_DocumentNumber'
      PRT.DocumentInfoRecord,
      @ObjectModel.foreignKey.association: '_DocumentVersion'
      PRT.DocumentVersion,
      @ObjectModel.foreignKey.association: '_DocumentProdnRsceTool'
      PRT.DocumentPart,

      // Associations
      _ProductionResourceType,
      PRT._ProdnRsceToolCategory,
      PRT._DocumentType,
      PRT._DocumentNumber,
      PRT._DocumentVersion,
      PRT._DocumentProdnRsceTool,
      _Language
}
where
     I_MaterialText.MaterialName                            <> ''
  or I_EquipmentText.EquipmentName                          <> ''
  or I_MiscProdnRsceToolText.MiscProductionResourceToolDesc <> ''
  or I_DocumentInfoRecordDesc.DocumentDescription           <> ''
  or I_MeasuringPoint.MeasuringPointDescription             <> '';
```
