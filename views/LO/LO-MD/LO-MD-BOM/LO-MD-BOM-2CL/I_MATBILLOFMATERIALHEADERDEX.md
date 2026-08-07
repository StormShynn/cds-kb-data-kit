---
name: I_MATBILLOFMATERIALHEADERDEX
description: MATBill of MaterialHEADERDEX
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - interface-view
  - data-extraction
  - material
  - bill-of-material
  - header-level
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# I_MATBILLOFMATERIALHEADERDEX

**MATBill of MaterialHEADERDEX**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfMaterialCategory` | ✓ | |  |  |  |  |
| `BillOfMaterial` | ✓ | |  |  |  |  |
| `BillOfMaterialVariant` | ✓ | |  |  |  |  |
| `BOMHeaderInternalChangeCount` | ✓ | |  |  |  |  |
| `BillOfMaterialVariantUsage` |  | |  |  |  |  |
| `BillOfMaterialVersion` |  | |  |  |  |  |
| `BillOfMaterialAuthsnGrp` |  | |  |  |  |  |
| `BOMIsConfigurable` |  | |  |  |  |  |
| `IsConfiguredMaterial` |  | |  |  |  |  |
| `IsVersionBillOfMaterial` |  | |  |  |  |  |
| `BOMTechnicalType` |  | |  |  |  |  |
| `BOMHeaderText` |  | |  |  |  |  |
| `BOMGroup` |  | |  |  |  |  |
| `IndicatorIsBOMWithDateHistory` |  | |  |  |  |  |
| `IndicatorIsBOMChangedWithHist` |  | |  |  |  |  |
| `HeaderValidityStartDate` |  | |  |  |  |  |
| `HeaderEngineeringChgNmbrDoc` |  | |  |  |  |  |
| `DeletionIndicator` |  | |  |  |  |  |
| `BOMIsArchivedForDeletion` |  | |  |  |  |  |
| `RecordCreationDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `BOMHeaderBaseUnit` |  | |  |  |  |  |
| `BOMHeaderQuantityInBaseUnit` |  | |  |  |  |  |
| `DocumentIsCreatedByCAD` |  | |  |  |  |  |
| `LaboratoryOrDesignOffice` |  | |  |  |  |  |
| `LongTextLanguage` |  | |  |  |  |  |
| `BOMAlternativeText` |  | |  |  |  |  |
| `BillOfMaterialStatus` |  | |  |  |  |  |
| `BOMOrBOMAltvCrtedInPlnt` |  | |  |  |  |  |
| `IsALE` |  | |  |  |  |  |
| `BillOfMaterialHeaderUUID` |  | |  |  |  |  |
| `HeaderValidityEndDate` |  | |  |  |  |  |
| `ChgToEngineeringChgDocument` |  | |  |  |  |  |
| `BOMVersionStatus` |  | |  |  |  |  |
| `IsLatestBOMVersion` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `BOMAssetNtwkHndovrIsRelevant` |  | |  |  |  |  |
| `BOMPredecessorVersion` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Data Extraction for BOM Header'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #L,
  dataClass: #MASTER
}
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name : 'BillOfMaterial'
 
@Analytics:{
     dataCategory: #FACT,
     dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'stko', role: #MAIN,
                    viewElement: ['BillOfMaterialCategory', 'BillOfMaterial', 'BillOfMaterialVariant', 'BOMHeaderInternalChangeCount'],
                    tableElement: ['stlty', 'stlnr', 'stlal', 'stkoz']
                },
 
                {
                    table: 'stzu', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['BillOfMaterialCategory', 'BillOfMaterial'],
                    tableElement: ['stlty', 'stlnr']
                }
            ]
        }
    }
}
 
define view entity I_MatBillOfMaterialHeaderDEX
  as select from P_MATBILLOFMATERIALHEADERDEX
{
  key BillOfMaterialCategory,
  key BillOfMaterial,
  key BillOfMaterialVariant,
  key BOMHeaderInternalChangeCount,
      BillOfMaterialVariantUsage,
      BillOfMaterialVersion,
      BillOfMaterialAuthsnGrp,
      BOMIsConfigurable,
      IsConfiguredMaterial,
      IsVersionBillOfMaterial,
      BOMTechnicalType,
      BOMHeaderText,
      BOMGroup,
      IndicatorIsBOMWithDateHistory,
      @Semantics.booleanIndicator: true
      IndicatorIsBOMChangedWithHist,
      HeaderValidityStartDate,
      HeaderEngineeringChgNmbrDoc,
      DeletionIndicator,
      BOMIsArchivedForDeletion,
      RecordCreationDate,
      CreatedByUser,
      LastChangeDate,
      LastChangedByUser,
      BOMHeaderBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BOMHeaderBaseUnit'
      BOMHeaderQuantityInBaseUnit,
      DocumentIsCreatedByCAD,
      LaboratoryOrDesignOffice,
      LongTextLanguage,
      BOMAlternativeText,
      BillOfMaterialStatus,
      BOMOrBOMAltvCrtedInPlnt,
      IsALE,
      BillOfMaterialHeaderUUID,
      HeaderValidityEndDate,
      ChgToEngineeringChgDocument,
      BOMVersionStatus,
      IsLatestBOMVersion,
      LastChangeDateTime,
      BOMAssetNtwkHndovrIsRelevant,
      BOMPredecessorVersion
 
}
```
