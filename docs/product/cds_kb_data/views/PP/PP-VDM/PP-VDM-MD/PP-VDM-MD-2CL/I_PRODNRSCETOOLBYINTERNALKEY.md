---
name: I_PRODNRSCETOOLBYINTERNALKEY
description: "Prodnrscetoolbyinternalkey"
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
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_PRODNRSCETOOLBYINTERNALKEY

**Prodnrscetoolbyinternalkey**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductionResourceType` | ✓ | |  |  |  |  |
| `ProductionResourceInternalID` | ✓ | |  |  |  |  |
| `ProductionResourceTool` |  | |  | `cast( case PRT.ProdnRsceToolCategory when 'M' then crvm_a.Material when 'E' then crve_a.Equipment when 'S' then crvs_a.MiscProductionResourceTool when 'D' then concat_with_space(concat_with_space(concat_with_space( crvd_a.DocumentInfoRecord, crvd_a.DocumentType, 1), crvd_a.DocumentPart, 1), crvd_a.DocumentVersion, 1) when 'P' then crvp_a.MeasuringPoint else PRT.ProdnRsceToolCategory end as pph_fhmnr preserving type)` |  |  |
| `ProdnRsceToolCategory` |  | |  |  |  |  |
| `ProdnRsceToolCategory_2` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `Equipment` |  | |  |  |  |  |
| `MiscProductionResourceTool` |  | |  |  |  |  |
| `DocumentType` |  | |  |  |  |  |
| `DocumentInfoRecord` |  | |  |  |  |  |
| `DocumentVersion` |  | |  |  |  |  |
| `DocumentPart` |  | |  |  |  |  |
| `MeasuringPoint` |  | |  |  |  |  |
| `_ProductionResourceType` |  | |  |  |  |  |
| `_ProdnRsceToolCategory` |  | |  |  |  |  |
| `_ProdnRsceToolCategory_2` |  | |  |  |  |  |
| `_ProdnRsceToolCategory_3` |  | |  |  |  |  |
| `_DocumentType` |  | |  |  |  |  |
| `_DocumentNumber` |  | |  |  |  |  |
| `_DocumentVersion` |  | |  |  |  |  |
| `_ProdnRsceToolText` | | ✓ | | | | |
| `_MaterialProdnRsceTool` | | ✓ | | | | |
| `_EquipmentProdnRsceTool` | | ✓ | | | | |
| `_MiscProdnRsceTool` | | ✓ | | | | |
| `_DocumentProdnRsceTool` | | ✓ | | | | |
| `_MsrgPointProdnRsceTool` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProdnRsceToolText` | `I_ProdnRsceToolText` | [0..*] |
| `_MaterialProdnRsceTool` | `I_MaterialProdnRsceTool` | [0..1] |
| `_EquipmentProdnRsceTool` | `I_EquipmentProdnRsceTool` | [0..1] |
| `_MiscProdnRsceTool` | `I_MiscProdnRsceTool` | [0..1] |
| `_DocumentProdnRsceTool` | `I_DocumentProdnRsceTool` | [0..1] |
| `_MsrgPointProdnRsceTool` | `I_MsrgPointProdnRsceTool` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPPRTIK'
@AbapCatalog.compiler.compareFilter: true
@Analytics.dataCategory: #DIMENSION
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.representativeKey: 'ProductionResourceInternalID'
@ObjectModel.semanticKey: ['ProductionResourceTool']
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #M, dataClass: #MASTER}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Production Resource Tool by Internal Key'
 
define view I_ProdnRsceToolByInternalKey
  as select from           I_ProdnRsceToolMasterData   as PRT

    left outer to one join I_MaterialPRTByInternalKey  as crvm_a on  crvm_a.ProductionResourceType       = PRT.ProductionResourceType
                                                                 and crvm_a.ProductionResourceInternalID = PRT.ProductionResourceInternalID

    left outer to one join I_EquipmentPRTByInternalKey as crve_a on  crve_a.ProductionResourceType       = PRT.ProductionResourceType
                                                                 and crve_a.ProductionResourceInternalID = PRT.ProductionResourceInternalID

    left outer to one join I_MiscPRTByInternalKey      as crvs_a on  crvs_a.ProductionResourceType       = PRT.ProductionResourceType
                                                                 and crvs_a.ProductionResourceInternalID = PRT.ProductionResourceInternalID

    left outer to one join I_DocumentPRTByInternalKey  as crvd_a on  crvd_a.ProductionResourceType       = PRT.ProductionResourceType
                                                                 and crvd_a.ProductionResourceInternalID = PRT.ProductionResourceInternalID

    left outer to one join I_MsrgPointPRTByInternalKey as crvp_a on  crvp_a.ProductionResourceType       = PRT.ProductionResourceType
                                                                 and crvp_a.ProductionResourceInternalID = PRT.ProductionResourceInternalID

  association [0..*] to I_ProdnRsceToolText      as _ProdnRsceToolText      on  $projection.ProductionResourceType       = _ProdnRsceToolText.ProductionResourceType
                                                                            and $projection.ProductionResourceInternalID = _ProdnRsceToolText.ProductionResourceInternalID

  association [0..1] to I_MaterialProdnRsceTool  as _MaterialProdnRsceTool  on  $projection.Plant    = _MaterialProdnRsceTool.Plant
                                                                            and $projection.Material = _MaterialProdnRsceTool.Material

  association [0..1] to I_EquipmentProdnRsceTool as _EquipmentProdnRsceTool on  $projection.Equipment = _EquipmentProdnRsceTool.Equipment

  association [0..1] to I_MiscProdnRsceTool      as _MiscProdnRsceTool      on  $projection.MiscProductionResourceTool = _MiscProdnRsceTool.MiscProductionResourceTool

  association [0..1] to I_DocumentProdnRsceTool  as _DocumentProdnRsceTool  on  $projection.DocumentType       = _DocumentProdnRsceTool.DocumentType
                                                                            and $projection.DocumentInfoRecord = _DocumentProdnRsceTool.DocumentInfoRecord
                                                                            and $projection.DocumentVersion    = _DocumentProdnRsceTool.DocumentVersion
                                                                            and $projection.DocumentPart       = _DocumentProdnRsceTool.DocumentPart

  association [0..1] to I_MsrgPointProdnRsceTool as _MsrgPointProdnRsceTool on  $projection.MeasuringPoint = _MsrgPointProdnRsceTool.MeasuringPoint
{
      @ObjectModel.foreignKey.association: '_ProductionResourceType'
  key PRT.ProductionResourceType,
      @ObjectModel.text.association: '_ProdnRsceToolText'
  key PRT.ProductionResourceInternalID,

      // Semantic Key
      cast(
        case PRT.ProdnRsceToolCategory
          when 'M' then crvm_a.Material
          when 'E' then crve_a.Equipment
          when 'S' then crvs_a.MiscProductionResourceTool
          when 'D' then concat_with_space(concat_with_space(concat_with_space(
                        crvd_a.DocumentInfoRecord, crvd_a.DocumentType, 1), crvd_a.DocumentPart, 1), crvd_a.DocumentVersion, 1)
          when 'P' then crvp_a.MeasuringPoint
          else PRT.ProdnRsceToolCategory
        end as pph_fhmnr preserving type) as ProductionResourceTool,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ProdnRsceToolCategory_2'
      @ObjectModel.foreignKey.association: '_ProdnRsceToolCategory'
      PRT.ProdnRsceToolCategory,
      @ObjectModel.foreignKey.association: '_ProdnRsceToolCategory_3'
      PRT.ProdnRsceToolCategory_2,


      @ObjectModel.foreignKey.association: '_Plant'
      crvm_a.Plant,
      @ObjectModel.foreignKey.association: '_MaterialProdnRsceTool'
      crvm_a.Material,

      @ObjectModel.foreignKey.association: '_EquipmentProdnRsceTool'
      crve_a.Equipment,

      @ObjectModel.foreignKey.association: '_MiscProdnRsceTool'
      crvs_a.MiscProductionResourceTool,

      @ObjectModel.foreignKey.association: '_DocumentType'
      crvd_a.DocumentType,
      @ObjectModel.foreignKey.association: '_DocumentNumber'
      crvd_a.DocumentInfoRecord,
      @ObjectModel.foreignKey.association: '_DocumentVersion'
      crvd_a.DocumentVersion,
      @ObjectModel.foreignKey.association: '_DocumentProdnRsceTool'
      crvd_a.DocumentPart,

      @ObjectModel.foreignKey.association: '_MsrgPointProdnRsceTool'
      crvp_a.MeasuringPoint,

      // Associations
      PRT._ProductionResourceType         as _ProductionResourceType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ProdnRsceToolCategory_3'
      PRT._ProdnRsceToolCategory          as _ProdnRsceToolCategory,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ProdnRsceToolCategory_3'
      PRT._ProdnRsceToolCategory_2        as _ProdnRsceToolCategory_2,
      PRT._ProdnRsceToolCategory_3        as _ProdnRsceToolCategory_3,
      crvm_a._Material,
      crvm_a._Plant,
      crve_a._Equipment,
      _ProdnRsceToolText,
      _MaterialProdnRsceTool,
      _EquipmentProdnRsceTool,
      _MiscProdnRsceTool,
      crvd_a._DocumentType                as _DocumentType,
      crvd_a._DocumentNumber              as _DocumentNumber,
      crvd_a._DocumentVersion             as _DocumentVersion,
      _DocumentProdnRsceTool,
      _MsrgPointProdnRsceTool,
      crvp_a._MeasuringPoint
};
```
