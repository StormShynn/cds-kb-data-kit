---
name: I_WBSBILLOFMATERIALHEADERDEX
description: WBSBill of MaterialHEADERDEX
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
  - wbs
  - header-level
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
  - bo:WBS
---
# I_WBSBILLOFMATERIALHEADERDEX

**WBSBill of MaterialHEADERDEX**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BillOfMaterialCategory` | `BillOfMaterialCategory` |
| key `BillOfMaterial` | `BillOfMaterial` |
| key `BillOfMaterialVariant` | `BillOfMaterialVariant` |
| key `BOMHeaderInternalChangeCount` | `BOMHeaderInternalChangeCount` |
| `BillOfMaterialVariantUsage` | `BillOfMaterialVariantUsage` |
| `BillOfMaterialVersion` | `BillOfMaterialVersion` |
| `BillOfMaterialAuthsnGrp` | `BillOfMaterialAuthsnGrp` |
| `BOMIsConfigurable` | `BOMIsConfigurable` |
| `IsConfiguredMaterial` | `IsConfiguredMaterial` |
| `IsVersionBillOfMaterial` | `IsVersionBillOfMaterial` |
| `BOMTechnicalType` | `BOMTechnicalType` |
| `BOMHeaderText` | `BOMHeaderText` |
| `BOMGroup` | `BOMGroup` |
| `IndicatorIsBOMWithDateHistory` | `IndicatorIsBOMWithDateHistory` |
| `IndicatorIsBOMChangedWithHist` | `IndicatorIsBOMChangedWithHist` |
| `HeaderValidityStartDate` | `HeaderValidityStartDate` |
| `HeaderEngineeringChgNmbrDoc` | `HeaderEngineeringChgNmbrDoc` |
| `DeletionIndicator` | `DeletionIndicator` |
| `BOMIsArchivedForDeletion` | `BOMIsArchivedForDeletion` |
| `RecordCreationDate` | `RecordCreationDate` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangedByUser` | `LastChangedByUser` |
| `BOMHeaderBaseUnit` | `BOMHeaderBaseUnit` |
| `BOMHeaderQuantityInBaseUnit` | `BOMHeaderQuantityInBaseUnit` |
| `DocumentIsCreatedByCAD` | `DocumentIsCreatedByCAD` |
| `LaboratoryOrDesignOffice` | `LaboratoryOrDesignOffice` |
| `LongTextLanguage` | `LongTextLanguage` |
| `BOMAlternativeText` | `BOMAlternativeText` |
| `BillOfMaterialStatus` | `BillOfMaterialStatus` |
| `BOMOrBOMAltvCrtedInPlnt` | `BOMOrBOMAltvCrtedInPlnt` |
| `IsALE` | `IsALE` |
| `BillOfMaterialHeaderUUID` | `BillOfMaterialHeaderUUID` |
| `HeaderValidityEndDate` | `HeaderValidityEndDate` |
| `ChgToEngineeringChgDocument` | `ChgToEngineeringChgDocument` |
| `BOMVersionStatus` | `BOMVersionStatus` |
| `IsLatestBOMVersion` | `IsLatestBOMVersion` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `BOMAssetNtwkHndovrIsRelevant` | `BOMAssetNtwkHndovrIsRelevant` |
| `BOMPredecessorVersion` | `BOMPredecessorVersion` |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'WBS BOM Header Extraction'
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
@ObjectModel.sapObjectNodeType.name : 'WBSBillOfMaterial'
 
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
define view entity I_WBSBillOfMaterialHeaderDEX as select from P_WBSBillOfMaterialHeaderDEX
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
