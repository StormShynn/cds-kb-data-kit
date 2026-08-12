---
name: I_DOCUMENTPRODNRSCETOOL
description: "Documentprodnrscetool"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - document
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_DOCUMENTPRODNRSCETOOL

**Documentprodnrscetool**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DocumentType` | ✓ | |  |  |  |  |
| `DocumentInfoRecord` | ✓ | |  |  |  |  |
| `DocumentVersion` | ✓ | |  |  |  |  |
| `DocumentPart` | ✓ | |  |  |  |  |
| `ProductionResourceType` |  | |  |  |  |  |
| `ProductionResourceInternalID` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `InternalDocumentStatus` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `_DocumentType` | | ✓ | | | | |
| `_DocumentNumber` | | ✓ | | | | |
| `_DocumentVersion` | | ✓ | | | | |
| `_DocumentInfoRecord` | | ✓ | | | | |
| `_ProductionResourceType` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPDOCUMENTPRT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser'] 
@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.representativeKey: 'DocumentPart'
@ObjectModel.semanticKey: ['DocumentType', 'DocumentInfoRecord', 'DocumentVersion', 'DocumentPart']
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #M, dataClass: #MASTER}
//@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Document Production Resource Tool'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_DocumentProdnRsceTool
  as select from I_DocumentPRTByInternalKey as PRT

{
      @ObjectModel.foreignKey.association: '_DocumentType'
  key PRT.DocumentType                                                                                                                                                                                                                            as     DocumentType,
      @ObjectModel.foreignKey.association: '_DocumentNumber'
//    @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key PRT.DocumentInfoRecord                                                                                                                                                                                                                      as     DocumentInfoRecord,
      @ObjectModel.foreignKey.association: '_DocumentVersion'
  key PRT.DocumentVersion                                                                                                                                                                                                                         as     DocumentVersion,
      -- representative key
  key PRT.DocumentPart                                                                                                                                                                                                                            as     DocumentPart,

      // Internal key
      @ObjectModel.foreignKey.association: '_ProductionResourceType'
      PRT.ProductionResourceType,
      PRT.ProductionResourceInternalID,

      // for DCLS
      AuthorizationGroup,
      InternalDocumentStatus,

//    **** The following fields cannot be maintained in CV01N ****
//    **** Therefore they are always empty                    ****
//    @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
//    PRT.ProductionResourceToolGroup1,
//    @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
//    PRT.ProductionResourceToolGroup2,
//    PRT.ProductionResourceUsage,
//    ProdnRsceToolControlProfile,
//    EngineeringChangeOrder,
//    ProdnRsceToolStandardTextCode,
//    ProdnRsceToolTotQtyCalcFormula,
//    ProdnRsceToolUsageQtyCalcFmla,
//    StartDateOffsetReferenceCode,
//    EndDateOffsetReferenceCode,
//
//    @Semantics.quantity.unitOfMeasure: 'StartDateOffsetDurationUnit'
//    @DefaultAggregation: #SUM
//    StartDateOffsetDuration,
//    @Semantics.unitOfMeasure: true
//    StartDateOffsetDurationUnit,
//    @Semantics.quantity.unitOfMeasure: 'EndDateOffsetDurationUnit'
//    @DefaultAggregation: #SUM
//    EndDateOffsetDuration,
//    @Semantics.unitOfMeasure: true
//    EndDateOffsetDurationUnit,
//    **** End of fields that cannot be maintained in CV01N ****

      // Admin data
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,

      // Associations
      _DocumentType,
      _DocumentNumber,
      _DocumentVersion,
      _DocumentInfoRecord,
      _ProductionResourceType,
//    _ProdnRsceToolGroup1,
//    _ProdnRsceToolGroup2,
//    _ProductionResourceUsage,
//    _ProdnRsceToolControlProfile,
//    _ProdnRsceToolStandardText,
//    _ProdnRsceToolTotQtyCalcFmla,
//    _ProdnRsceToolUsageQtyCalcFmla,
//    _StartDateOffsetReferenceCode,
//    _EndDateOffsetReferenceCode,
//    _StartDateOffsetDurationUnit,
//    _EndDateOffsetDurationUnit,
      _CreatedByUser,
      _LastChangedByUser
};
```
