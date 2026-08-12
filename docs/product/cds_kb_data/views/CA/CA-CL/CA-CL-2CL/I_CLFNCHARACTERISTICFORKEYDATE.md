---
name: I_CLFNCHARACTERISTICFORKEYDATE
description: "Clfncharacteristicforkeydate"
app_component: CA-CL-2CL
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-CL
  - interface-view
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCHARACTERISTICFORKEYDATE

**Clfncharacteristicforkeydate**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CharcInternalID` | ✓ | |  |  | `NUMC(10)` | Characteristic Internal ID |
| `Characteristic` |  | |  |  | `CHAR(30)` | Characteristic Name |
| `CharcStatus` |  | |  |  | `CHAR(1)` | Characteristic status |
| `CharcDataType` |  | |  |  | `CHAR(4)` | Data type of characteristic |
| `CharcLength` |  | |  |  | `INT2(5)` | Number of Characters |
| `CharcDecimals` |  | |  |  | `INT2(5)` | Number of Decimal Places |
| `CharcTemplate` |  | |  |  | `CHAR(70)` | Value with template |
| `ValueIsCaseSensitive` |  | |  |  | `CHAR(1)` | Case Sensitive |
| `CharcConversionRoutine` |  | |  |  | `CHAR(5)` | Name of Conversion Routine |
| `CharcGroup` |  | |  |  | `CHAR(10)` | Characteristic Group |
| `EntryIsRequired` |  | |  |  | `CHAR(1)` | Entry Required |
| `MultipleValuesAreAllowed` |  | |  |  | `CHAR(1)` | Multiple Values Are Allowed |
| `CharcValueUnit` |  | |  |  | `UNIT(3)` | Unit of Measurement |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CharcExponentValue` |  | |  |  | `INT2(5)` | Exponent display |
| `ValueIntervalIsAllowed` |  | |  |  | `CHAR(1)` | Interval Values Allowed |
| `AdditionalValueIsAllowed` |  | |  |  | `CHAR(1)` | Indicator: Additional Values |
| `NegativeValueIsAllowed` |  | |  |  | `CHAR(1)` | Value with Plus or Minus Sign |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-to date |
| `ChangeNumber` |  | |  |  | `CHAR(12)` | Change Number |
| `DocumentInfoRecordDocType` |  | |  |  | `CHAR(3)` | Document Type |
| `DocumentInfoRecordDocNumber` |  | |  |  | `CHAR(25)` | Document Number |
| `DocumentInfoRecordDocVersion` |  | |  |  | `CHAR(2)` | Document Version |
| `DocumentInfoRecordDocPart` |  | |  |  | `CHAR(3)` | Document Part |
| `CharcMaintAuthGrp` |  | |  |  | `CHAR(3)` | Authorization Group for Characteristics Maintenance |
| `CharcIsReadOnly` |  | |  |  | `CHAR(1)` | No Entry Allowed for Characteristic |
| `CharcIsHidden` |  | |  |  | `CHAR(1)` | Characteristic Not To Be Displayed |
| `CharcIsRestrictable` |  | |  |  | `CHAR(1)` | Restriction of Characteristic Allowed Values |
| `CharcReferenceTable` |  | |  |  | `CHAR(30)` | Table Name |
| `CharcReferenceTableField` |  | |  |  | `CHAR(30)` | Field Name |
| `CharcCheckTable` |  | |  |  | `CHAR(30)` | Check table |
| `CharcCheckFunctionModule` |  | |  |  | `CHAR(30)` | Function Module for Checking Values |
| `CharcExponentFormat` |  | |  |  | `NUMC(1)` | Exponent Display Format |
| `CharcEntryIsNotFormatCtrld` |  | |  |  | `CHAR(1)` | Unformatted Entry Control |
| `CharcTemplateIsDisplayed` |  | |  |  | `CHAR(1)` | Indicator: Display Template When Assigning Values |
| `CharcSelectedSet` |  | |  |  | `CHAR(8)` | Selected Set |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `CharcCatalogType` |  | |  |  | `CHAR(1)` | Catalog |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `CharcLastChangedDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `_CharacteristicDesc` | | ✓ | | | | |
| `_CharacteristicValue` | | ✓ | | | | |
| `_CharacteristicGroup` | | ✓ | | | | |
| `_CharacteristicStatus` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CharacteristicDesc` | `I_ClfnCharcDescForKeyDate` | [0..*] |
| `_CharacteristicValue` | `I_ClfnCharcValueForKeyDate` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'INGCCHR2'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser']
@EndUserText.label: 'Clfn Characteristic for Key Date'
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.representativeKey: 'CharcInternalID'
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities:
  [  #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #SQL_DATA_SOURCE                  ]
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] } */
define view I_ClfnCharacteristicForKeyDate
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate : sydate
  as select from I_ClfnCharacteristic as Characteristic
      
      association [0..*] to I_ClfnCharcDescForKeyDate as _CharacteristicDesc 
        on  _CharacteristicDesc.CharcInternalID  = $projection.CharcInternalID  

      association [0..*] to I_ClfnCharcValueForKeyDate as _CharacteristicValue
        on _CharacteristicValue.CharcInternalID    = $projection.CharcInternalID
           
            
{
  key Characteristic.CharcInternalID,
      Characteristic.Characteristic,
      Characteristic.CharcStatus,
      Characteristic.CharcDataType,
      Characteristic.CharcLength,
      Characteristic.CharcDecimals,
      Characteristic.CharcTemplate,
      Characteristic.ValueIsCaseSensitive,
      Characteristic.CharcConversionRoutine,
      Characteristic.CharcGroup,
      Characteristic.EntryIsRequired,
      Characteristic.MultipleValuesAreAllowed,
      Characteristic.CharcValueUnit,
      Characteristic.Currency,
      Characteristic.CharcExponentValue,
      Characteristic.ValueIntervalIsAllowed,
      Characteristic.AdditionalValueIsAllowed,
      Characteristic.NegativeValueIsAllowed,
      @Semantics.businessDate.from: true
      Characteristic.ValidityStartDate,
      @Semantics.businessDate.to: true
      Characteristic.ValidityEndDate,         
      Characteristic.ChangeNumber, 
      Characteristic.DocumentInfoRecordDocType,
      Characteristic.DocumentInfoRecordDocNumber,
      Characteristic.DocumentInfoRecordDocVersion,
      Characteristic.DocumentInfoRecordDocPart,           
      Characteristic.CharcMaintAuthGrp,
      Characteristic.CharcIsReadOnly,
      Characteristic.CharcIsHidden,
      Characteristic.CharcIsRestrictable,
      Characteristic.CharcReferenceTable,
      Characteristic.CharcReferenceTableField,
      Characteristic.CharcCheckTable,
      Characteristic.CharcCheckFunctionModule,
      Characteristic.CharcExponentFormat,
      Characteristic.CharcEntryIsNotFormatCtrld,
      Characteristic.CharcTemplateIsDisplayed,
      Characteristic.CharcSelectedSet,
      Characteristic.Plant,
      Characteristic.CharcCatalogType,
      Characteristic.CreatedByUser,
      Characteristic.CreationDate,
      Characteristic.LastChangedByUser,
      Characteristic.LastChangeDate,     
      Characteristic.CharcLastChangedDateTime,
  
      _CharacteristicDesc,
      _CharacteristicValue,      
      _CharacteristicGroup,
      _CharacteristicStatus,
      _UnitOfMeasure,
      _Currency,
      _CreatedByUser,
      _LastChangedByUser
}
where Characteristic.ValidityStartDate   <= $parameters.P_KeyDate
and   Characteristic.ValidityEndDate     >= $parameters.P_KeyDate
and   Characteristic.IsDeleted = ''
```
