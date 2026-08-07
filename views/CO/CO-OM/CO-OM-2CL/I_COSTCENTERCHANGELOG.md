---
name: I_COSTCENTERCHANGELOG
description: Cost CenterCHANGELOG
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-OM
  - interface-view
  - cost-center
  - component:CO-OM-2CL
  - lob:Controlling
  - bo:CostCenter
---
# I_COSTCENTERCHANGELOG

**Cost CenterCHANGELOG**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ChangeDocumentControllingArea` | ✓ | |  |  |
| `ChangeDocumentCostCenter` | ✓ | |  | `cast( ChangeDocumentItem.ChangeDocumentCostCenter as kostl )` |
| `ChangeDocumentValidityEndDate` | ✓ | |  | `cast( ChangeDocumentItem.ChangeDocumentValidityEndDate as costcentervalidityenddate )` |
| `ChangeDocValidityStartDate` | ✓ | |  | `cast( ChangeDocumentItem.ChangeDocValidityStartDate as costcentervaliditystartdate )` |
| `ChangeDocObject` | ✓ | |  |  |
| `ChangeDocument` | ✓ | |  |  |
| `ChangeDocDatabaseTableField` | ✓ | |  |  |
| `ChangeDocItemChangeType` | ✓ | |  |  |
| `ChangeDocObjectClass` |  | |  |  |
| `DatabaseTable` |  | |  |  |
| `ChangeDocTableKey` |  | |  |  |
| `ChangeDocPreviousUnit` |  | |  |  |
| `ChangeDocNewUnit` |  | |  |  |
| `ChangeDocPreviousCurrency` |  | |  |  |
| `ChangeDocNewCurrency` |  | |  |  |
| `ChangeDocNewFieldValue` |  | |  |  |
| `ChangeDocPreviousFieldValue` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDate` |  | |  |  |
| `CreationTime` |  | |  |  |
| `ChangeDocLanguage` |  | |  |  |
| `BusinessArea` |  | |  |  |
| `CompanyCode` |  | |  |  |
| `ControllingArea` |  | |  |  |
| `CostCenter` |  | |  |  |
| `ValidityEndDate` |  | |  |  |
| `ValidityStartDate` |  | |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `CostCenter` | `I_CostCenter` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICCCHNGLOG'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Cost Center Change Log'
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
      #CDS_MODELING_ASSOCIATION_TARGET,
      #CDS_MODELING_DATA_SOURCE,
      #SQL_DATA_SOURCE ],
  usageType: {
    sizeCategory: #L,
    serviceQuality: #C,
    dataClass: #MIXED
  }
}
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true

define view I_CostCenterChangeLog
  as select from    P_CostCenterChangeLog as ChangeDocumentItem
    association [0..1] to I_CostCenter    as CostCenter on  ChangeDocumentItem.ChangeDocumentControllingArea = CostCenter.ControllingArea
                                                        and ChangeDocumentItem.ChangeDocumentCostCenter      = CostCenter.CostCenter
                                                        and ChangeDocumentItem.ChangeDocumentValidityEndDate = CostCenter.ValidityEndDate
                                                        and ChangeDocumentItem.ChangeDocValidityStartDate    = CostCenter.ValidityStartDate
{
      //P_CostCenterChangeLog
  key ChangeDocumentItem.ChangeDocumentControllingArea,
  key cast( ChangeDocumentItem.ChangeDocumentCostCenter as kostl )                          as ChangeDocumentCostCenter,
  key cast( ChangeDocumentItem.ChangeDocumentValidityEndDate as costcentervalidityenddate ) as ChangeDocumentValidityEndDate,
  key cast( ChangeDocumentItem.ChangeDocValidityStartDate as costcentervaliditystartdate )  as ChangeDocValidityStartDate,
  key ChangeDocumentItem.ChangeDocObject,
  key ChangeDocumentItem.ChangeDocument,
  key ChangeDocumentItem.ChangeDocDatabaseTableField,
  key ChangeDocumentItem.ChangeDocItemChangeType,
      ChangeDocumentItem.ChangeDocObjectClass,
      ChangeDocumentItem.DatabaseTable,
      ChangeDocumentItem.ChangeDocTableKey,
      ChangeDocumentItem.ChangeDocPreviousUnit,
      ChangeDocumentItem.ChangeDocNewUnit,
      ChangeDocumentItem.ChangeDocPreviousCurrency,
      ChangeDocumentItem.ChangeDocNewCurrency,
      ChangeDocumentItem.ChangeDocNewFieldValue,
      ChangeDocumentItem.ChangeDocPreviousFieldValue,
      CreatedByUser,
      CreationDate,
      CreationTime,
      ChangeDocLanguage,

      //CostCenter
      CostCenter.BusinessArea,
      CostCenter.CompanyCode,
      CostCenter.ControllingArea,
      CostCenter.CostCenter,
      CostCenter.ValidityEndDate,
      CostCenter.ValidityStartDate,

      /* Associations */
      //P_CostCenterChangeLog
      ChangeDocumentItem._ChangeDocLongTableKey,
      ChangeDocumentItem._ChangeDocument,
      ChangeDocumentItem._ChangeDocumentItemExtension,
      //_CostCenter
      CostCenter._BusinessArea,
      CostCenter._CompanyCode,
      CostCenter._ControllingArea

}
```
