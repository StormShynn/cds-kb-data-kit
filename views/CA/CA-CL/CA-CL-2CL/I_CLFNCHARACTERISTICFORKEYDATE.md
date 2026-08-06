---
name: I_CLFNCHARACTERISTICFORKEYDATE
description: Clfncharacteristicforkeydate
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

| Field | Data Source |
|---|---|
| key `CharcInternalID` | `Characteristic.CharcInternalID` |
| `Characteristic` | `Characteristic.Characteristic` |
| `CharcStatus` | `Characteristic.CharcStatus` |
| `CharcDataType` | `Characteristic.CharcDataType` |
| `CharcLength` | `Characteristic.CharcLength` |
| `CharcDecimals` | `Characteristic.CharcDecimals` |
| `CharcTemplate` | `Characteristic.CharcTemplate` |
| `ValueIsCaseSensitive` | `Characteristic.ValueIsCaseSensitive` |
| `CharcConversionRoutine` | `Characteristic.CharcConversionRoutine` |
| `CharcGroup` | `Characteristic.CharcGroup` |
| `EntryIsRequired` | `Characteristic.EntryIsRequired` |
| `MultipleValuesAreAllowed` | `Characteristic.MultipleValuesAreAllowed` |
| `CharcValueUnit` | `Characteristic.CharcValueUnit` |
| `Currency` | `Characteristic.Currency` |
| `CharcExponentValue` | `Characteristic.CharcExponentValue` |
| `ValueIntervalIsAllowed` | `Characteristic.ValueIntervalIsAllowed` |
| `AdditionalValueIsAllowed` | `Characteristic.AdditionalValueIsAllowed` |
| `NegativeValueIsAllowed` | `Characteristic.NegativeValueIsAllowed` |
| `ValidityStartDate` | `Characteristic.ValidityStartDate` |
| `ValidityEndDate` | `Characteristic.ValidityEndDate` |
| `ChangeNumber` | `Characteristic.ChangeNumber` |
| `DocumentInfoRecordDocType` | `Characteristic.DocumentInfoRecordDocType` |
| `DocumentInfoRecordDocNumber` | `Characteristic.DocumentInfoRecordDocNumber` |
| `DocumentInfoRecordDocVersion` | `Characteristic.DocumentInfoRecordDocVersion` |
| `DocumentInfoRecordDocPart` | `Characteristic.DocumentInfoRecordDocPart` |
| `CharcMaintAuthGrp` | `Characteristic.CharcMaintAuthGrp` |
| `CharcIsReadOnly` | `Characteristic.CharcIsReadOnly` |
| `CharcIsHidden` | `Characteristic.CharcIsHidden` |
| `CharcIsRestrictable` | `Characteristic.CharcIsRestrictable` |
| `CharcReferenceTable` | `Characteristic.CharcReferenceTable` |
| `CharcReferenceTableField` | `Characteristic.CharcReferenceTableField` |
| `CharcCheckTable` | `Characteristic.CharcCheckTable` |
| `CharcCheckFunctionModule` | `Characteristic.CharcCheckFunctionModule` |
| `CharcExponentFormat` | `Characteristic.CharcExponentFormat` |
| `CharcEntryIsNotFormatCtrld` | `Characteristic.CharcEntryIsNotFormatCtrld` |
| `CharcTemplateIsDisplayed` | `Characteristic.CharcTemplateIsDisplayed` |
| `CharcSelectedSet` | `Characteristic.CharcSelectedSet` |
| `Plant` | `Characteristic.Plant` |
| `CharcCatalogType` | `Characteristic.CharcCatalogType` |
| `CreatedByUser` | `Characteristic.CreatedByUser` |
| `CreationDate` | `Characteristic.CreationDate` |
| `LastChangedByUser` | `Characteristic.LastChangedByUser` |
| `LastChangeDate` | `Characteristic.LastChangeDate` |
| `CharcLastChangedDateTime` | `Characteristic.CharcLastChangedDateTime` |
| `_CharacteristicDesc` | *Association* |
| `_CharacteristicValue` | *Association* |
| `_CharacteristicGroup` | *Association* |
| `_CharacteristicStatus` | *Association* |
| `_UnitOfMeasure` | *Association* |
| `_Currency` | *Association* |
| `_CreatedByUser` | *Association* |
| `_LastChangedByUser` | *Association* |

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
