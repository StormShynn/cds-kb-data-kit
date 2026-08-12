---
name: I_SALESORDERBOMHEADERDEX
description: "Sales OrderBOMHEADERDEX"
app_component: LO-MD-BOM-2CL
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
  - LO
  - LO-MD
  - LO-MD-BOM
  - interface-view
  - data-extraction
  - sales-order
  - bom
  - header-level
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:SalesOrder
---
# I_SALESORDERBOMHEADERDEX

**Sales OrderBOMHEADERDEX**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
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
@EndUserText.label: 'Sales Order BOM Header Extraction'
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
@ObjectModel.sapObjectNodeType.name : 'SalesBillOfMaterial'
 
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
define view entity I_SalesOrderBOMHeaderDEX as select from P_SALESORDERBOMHEADERDEX
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
