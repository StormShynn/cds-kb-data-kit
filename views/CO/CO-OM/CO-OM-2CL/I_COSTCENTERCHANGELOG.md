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

| Field | Data Source |
|---|---|
| key `ChangeDocumentControllingArea` | `ChangeDocumentItem.ChangeDocumentControllingArea` |
| key `ChangeDocumentCostCenter` | `cast( ChangeDocumentItem.ChangeDocumentCostCenter as kostl )` |
| key `ChangeDocumentValidityEndDate` | `cast( ChangeDocumentItem.ChangeDocumentValidityEndDate as costcentervalidityenddate )` |
| key `ChangeDocValidityStartDate` | `cast( ChangeDocumentItem.ChangeDocValidityStartDate as costcentervaliditystartdate )` |
| key `ChangeDocObject` | `ChangeDocumentItem.ChangeDocObject` |
| key `ChangeDocument` | `ChangeDocumentItem.ChangeDocument` |
| key `ChangeDocDatabaseTableField` | `ChangeDocumentItem.ChangeDocDatabaseTableField` |
| key `ChangeDocItemChangeType` | `ChangeDocumentItem.ChangeDocItemChangeType` |
| `ChangeDocObjectClass` | `ChangeDocumentItem.ChangeDocObjectClass` |
| `DatabaseTable` | `ChangeDocumentItem.DatabaseTable` |
| `ChangeDocTableKey` | `ChangeDocumentItem.ChangeDocTableKey` |
| `ChangeDocPreviousUnit` | `ChangeDocumentItem.ChangeDocPreviousUnit` |
| `ChangeDocNewUnit` | `ChangeDocumentItem.ChangeDocNewUnit` |
| `ChangeDocPreviousCurrency` | `ChangeDocumentItem.ChangeDocPreviousCurrency` |
| `ChangeDocNewCurrency` | `ChangeDocumentItem.ChangeDocNewCurrency` |
| `ChangeDocNewFieldValue` | `ChangeDocumentItem.ChangeDocNewFieldValue` |
| `ChangeDocPreviousFieldValue` | `ChangeDocumentItem.ChangeDocPreviousFieldValue` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `CreationTime` | `CreationTime` |
| `ChangeDocLanguage` | `ChangeDocLanguage` |
| `BusinessArea` | `CostCenter.BusinessArea` |
| `CompanyCode` | `CostCenter.CompanyCode` |
| `ControllingArea` | `CostCenter.ControllingArea` |
| `CostCenter` | `CostCenter.CostCenter` |
| `ValidityEndDate` | `CostCenter.ValidityEndDate` |
| `ValidityStartDate` | `CostCenter.ValidityStartDate` |

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
