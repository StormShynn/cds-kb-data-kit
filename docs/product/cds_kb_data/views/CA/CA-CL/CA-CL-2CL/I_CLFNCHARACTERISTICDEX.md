---
name: I_CLFNCHARACTERISTICDEX
description: "Clfncharacteristicdex"
app_component: CA-CL-2CL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-CL
  - interface-view
  - data-extraction
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCHARACTERISTICDEX

**Clfncharacteristicdex**

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
| `ValidityEndDate` | ✓ | |  |  | `DATS(8)` | Valid-to date |
| `TimeIntervalNumber` |  | |  |  | `NUMC(4)` | Internal Counter for Archiving Objects by ECM |
| `Characteristic` |  | |  |  | `CHAR(30)` | Characteristic Name |
| `CharcStatus` |  | |  |  | `CHAR(1)` | Characteristic status |
| `CharcDataType` |  | |  |  | `CHAR(4)` | Data type of characteristic |
| `CharcLength` |  | |  |  | `INT2(5)` | Number of Characters |
| `CharcDecimals` |  | |  |  | `INT2(5)` | Number of Decimal Places |
| `CharcTemplate` |  | |  |  | `CHAR(70)` | Value with template |
| `ValueIsCaseSensitive` |  | |  |  | `CHAR(1)` | Case Sensitive |
| `CharcConversionRoutine` |  | |  |  | `CHAR(5)` | Name of Conversion Routine |
| `CharcGroup` |  | |  |  | `CHAR(10)` | Characteristic Group |
| `EntryIsRequired` |  | |  | `cast ( Characteristic.EntryRequiredCode as entryisrequired preserving type )` | `CHAR(1)` | Entry Required |
| `MultipleValuesAreAllowed` |  | |  | `cast ( Characteristic.MultipleValuesAllowedCode as multiplevaluesareallowed preserving type )` | `CHAR(1)` | Multiple Values Are Allowed |
| `CharcValueUnit` |  | |  |  | `UNIT(3)` | Unit of Measurement |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CharcExponentFormat` |  | |  |  | `NUMC(1)` | Exponent Display Format |
| `CharcExponentValue` |  | |  |  | `INT2(5)` | Exponent display |
| `ValueIntervalIsAllowed` |  | |  | `cast ( Characteristic.ValueIntervalAllowedCode as valueintervalisallowed preserving type )` | `CHAR(1)` | Interval Values Allowed |
| `AdditionalValueIsAllowed` |  | |  | `cast ( Characteristic.AdditionalValueAllowedCode as additionalvalueisallowed preserving type )` | `CHAR(1)` | Indicator: Additional Values |
| `NegativeValueIsAllowed` |  | |  |  | `CHAR(1)` | Value with Plus or Minus Sign |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ChangeNumber` |  | |  |  | `CHAR(12)` | Change Number |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `DocumentInfoRecordDocType` |  | |  |  | `CHAR(3)` | Document Type |
| `DocumentInfoRecordDocNumber` |  | |  |  | `CHAR(25)` | Document Number |
| `DocumentInfoRecordDocVersion` |  | |  |  | `CHAR(2)` | Document Version |
| `DocumentInfoRecordDocPart` |  | |  |  | `CHAR(3)` | Document Part |
| `CharcMaintAuthGrp` |  | |  |  | `CHAR(3)` | Authorization Group for Characteristics Maintenance |
| `CharcIsReadOnly` |  | |  | `cast ( Characteristic.CharcReadOnlyCode as charcisreadonly preserving type )` | `CHAR(1)` | No Entry Allowed for Characteristic |
| `CharcIsHidden` |  | |  | `cast ( Characteristic.CharcHiddenCode as charcishidden preserving type )` | `CHAR(1)` | Characteristic Not To Be Displayed |
| `CharcIsRestrictable` |  | |  | `cast ( Characteristic.CharcRestrictableCode as charcisrestrictable preserving type )` | `CHAR(1)` | Restriction of Characteristic Allowed Values |
| `CharcReferenceTable` |  | |  |  | `CHAR(30)` | Table Name |
| `CharcReferenceTableField` |  | |  |  | `CHAR(30)` | Field Name |
| `CharcCheckTable` |  | |  |  | `CHAR(30)` | Check table |
| `CharcCheckFunctionModule` |  | |  |  | `CHAR(30)` | Function Module for Checking Values |
| `CharcEntryIsNotFormatCtrld` |  | |  | `cast ( Characteristic.CharcEntryNotFormatCtrldCode as charcentryisnotformatctrld preserving type )` | `CHAR(1)` | Unformatted Entry Control |
| `CharcTemplateIsDisplayed` |  | |  | `cast ( Characteristic.CharcTemplateDisplayedCode as charctemplateisdisplayed preserving type )` | `CHAR(1)` | Indicator: Display Template When Assigning Values |
| `CharcSelectedSet` |  | |  |  | `CHAR(8)` | Selected Set |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `CharcCatalogType` |  | |  |  | `CHAR(1)` | Catalog |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `CharcLastChangedDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `_CharacteristicGroup` | | ✓ | | | | |
| `_CharacteristicStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CharacteristicGroup` | `I_ClfnCharcGroup` | [0..1] |
| `_CharacteristicStatus` | `I_ClfnCharcStatus` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.alternativeKey: ['CharcInternalID','TimeIntervalNumber']
@Analytics.dataExtraction.delta.changeDataCapture.mapping: [ 
  { table: 'CABN',
    role: #MAIN,
    tableElement: ['ATINN','ADZHL'], 
    viewElement: ['CharcInternalID','TimeIntervalNumber']
    } ]
@Analytics.dataExtraction.enabled
@Analytics.internalName:#LOCAL
@EndUserText.label: 'Classification Characteristic DEX'
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'CharcInternalID'
@ObjectModel.supportedCapabilities:
   [ #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #EXTRACTION_DATA_SOURCE,
     #ANALYTICAL_DIMENSION,
     #SQL_DATA_SOURCE ]
@ObjectModel.usageType.dataClass: #MASTER     
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.sapObjectNodeType.name: 'ClassificationCharacteristic'     
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API  
@VDM.viewType: #BASIC
define view entity I_ClfnCharacteristicDEX
  as select from I_ClfnCharcBasic as Characteristic 
  
      association [0..1] to I_ClfnCharcGroup as _CharacteristicGroup
        on  $projection.CharcGroup  = _CharacteristicGroup.CharcGroup
  
      association [0..1] to I_ClfnCharcStatus as _CharacteristicStatus
        on  $projection.CharcStatus  = _CharacteristicStatus.CharcStatus
    
{
  key Characteristic.CharcInternalID,
      @Semantics.businessDate.to: true
  key Characteristic.ValidityEndDate,    
      Characteristic.TimeIntervalNumber,  
      Characteristic.Characteristic,
      Characteristic.CharcStatus,
      Characteristic.CharcDataType,
      Characteristic.CharcLength,
      Characteristic.CharcDecimals,
      Characteristic.CharcTemplate,
      Characteristic.ValueIsCaseSensitive,
      Characteristic.CharcConversionRoutine,
      Characteristic.CharcGroup,
      cast ( Characteristic.EntryRequiredCode as entryisrequired preserving type ) as EntryIsRequired, // no overwritten characteristic: the representation of the field needed to change from code to indicator
      cast ( Characteristic.MultipleValuesAllowedCode as multiplevaluesareallowed preserving type ) as MultipleValuesAreAllowed, // no overwritten characteristic: the representation of the field needed to change from code to indicator  
      Characteristic.CharcValueUnit,
      Characteristic.Currency,      
      Characteristic.CharcExponentFormat,
      Characteristic.CharcExponentValue,
      cast ( Characteristic.ValueIntervalAllowedCode as valueintervalisallowed preserving type ) as ValueIntervalIsAllowed, // no overwritten characteristic: the representation of the field needed to change from code to indicator 
      cast ( Characteristic.AdditionalValueAllowedCode as additionalvalueisallowed preserving type ) as AdditionalValueIsAllowed, // no overwritten characteristic: the representation of the field needed to change from code to indicator 
      Characteristic.NegativeValueIsAllowed,
      @Semantics.businessDate.from: true
      Characteristic.ValidityStartDate,         
      Characteristic.ChangeNumber,
      Characteristic.IsDeleted,
      Characteristic.DocumentInfoRecordDocType,
      Characteristic.DocumentInfoRecordDocNumber,
      Characteristic.DocumentInfoRecordDocVersion,
      Characteristic.DocumentInfoRecordDocPart,
      Characteristic.CharcMaintAuthGrp,
      cast ( Characteristic.CharcReadOnlyCode as charcisreadonly preserving type ) as CharcIsReadOnly, // no overwritten characteristic: the representation of the field needed to change from code to indicator  
      cast ( Characteristic.CharcHiddenCode as charcishidden preserving type ) as CharcIsHidden, // no overwritten characteristic: the representation of the field needed to change from code to indicator
      cast ( Characteristic.CharcRestrictableCode as charcisrestrictable preserving type ) as CharcIsRestrictable, // no overwritten characteristic: the representation of the field needed to change from code to indicator  
      Characteristic.CharcReferenceTable,
      Characteristic.CharcReferenceTableField,
      Characteristic.CharcCheckTable,
      Characteristic.CharcCheckFunctionModule,
      cast ( Characteristic.CharcEntryNotFormatCtrldCode as charcentryisnotformatctrld preserving type ) as CharcEntryIsNotFormatCtrld, // no overwritten characteristic: the representation of the field needed to change from code to indicator    
      cast ( Characteristic.CharcTemplateDisplayedCode as charctemplateisdisplayed preserving type ) as CharcTemplateIsDisplayed, // no overwritten characteristic: the representation of the field needed to change from code to indicator
      Characteristic.CharcSelectedSet,
      Characteristic.Plant,
      Characteristic.CharcCatalogType,
      Characteristic.CreatedByUser,
      Characteristic.CreationDate,
      Characteristic.LastChangedByUser,
      Characteristic.LastChangeDate,
      Characteristic.CharcLastChangedDateTime,
      
      _CharacteristicGroup,
      _CharacteristicStatus
}
where Characteristic.CharcIdentificationCode = ''  // overwritten characteristics are skipped
```
