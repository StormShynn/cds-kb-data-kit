---
name: I_BUSSOLNORDBASICFINANCIAL
description: Bussolnordbasicfinancial
app_component: CRM-S4-ANA-CDS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - component:CRM-S4-ANA-CDS-2CL
  - lob:Other
---
# I_BUSSOLNORDBASICFINANCIAL

**Bussolnordbasicfinancial**

| Property | Value |
|---|---|
| App Component | `CRM-S4-ANA-CDS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BusinessSolutionOrder` | ✓ | |  | `ServiceDocument` |
| `ServiceObjectType` |  | |  |  |
| `BusinessSolutionOrderUUID` |  | |  | `ServiceDocumentUUID` |
| `ServiceDocumentType` |  | |  |  |
| `ServiceDocumentDescription` |  | |  |  |
| `Language` |  | |  |  |
| `PostingDate` |  | |  |  |
| `ServiceDocNetAmount` |  | |  | `} ServiceDocNetAmount` |
| `ServiceDocGrossAmount` |  | |  | `} ServiceDocGrossAmount` |
| `ServiceDocTaxAmount` |  | |  | `} ServiceDocTaxAmount` |
| `TransactionCurrency` |  | |  |  |
| `SoldToParty` |  | |  |  |
| `SoldToPartyCountry` |  | |  |  |
| `SoldToPartyRegion` |  | |  |  |
| `ResponsibleEmployee` |  | |  |  |
| `ServiceDocumentStatus` |  | |  |  |
| `SalesOrganizationOrgUnitID` |  | |  |  |
| `SalesOfficeOrgUnitID` |  | |  |  |
| `SalesGroupOrgUnitID` |  | |  |  |
| `DistributionChannel` |  | |  |  |
| `Division` |  | |  |  |
| `ServiceOrganization` |  | |  |  |
| `ResponsibleServiceOrganization` |  | |  |  |
| `SalesOrganization` |  | |  |  |
| `SalesOffice` |  | |  |  |
| `SalesGroup` |  | |  |  |
| `_ServiceDocumentType` | | ✓ | | |
| `_SoldToParty` | | ✓ | | |
| `_SoldToPartyCountry` | | ✓ | | |
| `_SoldToPartyRegion` | | ✓ | | |
| `_RespEmployee` | | ✓ | | |
| `_ServiceDocumentStatus` | | ✓ | | |
| `_SrvcDocLifecycleStatus` | | ✓ | | |
| `_SalesOrganizationOrgUnit` | | ✓ | | |
| `_SalesOrganizationOrgUnit_2` | | ✓ | | |
| `_SalesOfficeOrgUnit` | | ✓ | | |
| `_SalesOfficeOrgUnit_2` | | ✓ | | |
| `_SalesGroupOrgUnit` | | ✓ | | |
| `_SalesGroupOrgUnit_2` | | ✓ | | |
| `_DistributionChannel` | | ✓ | | |
| `_Division` | | ✓ | | |
| `_ServiceOrganizationOrgUnit` | | ✓ | | |
| `_ServiceOrganizationOrgUnit_2` | | ✓ | | |
| `_RespSrvcOrganizationOrgUnit` | | ✓ | | |
| `_RespSrvcOrganizationOrgUnit_2` | | ✓ | | |
| `_SalesOrganization` | | ✓ | | |
| `_SalesOffice` | | ✓ | | |
| `_SalesGroup` | | ✓ | | |
| `_ServiceObjType` | | ✓ | | |

## Source Code

```abap
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@ObjectModel: {
   representativeKey: 'BusinessSolutionOrder',
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #C,
     sizeCategory:   #XXL
   },
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   modelingPattern: #ANALYTICAL_DIMENSION
}

@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IBUSSOLORDFR'
@Analytics.internalName:#LOCAL
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Solution Order for Financial Reporting'
define view entity I_BusSolnOrdBasicFinancial
  as select from I_ServiceDocumentEnhcd
{
      @ObjectModel.text.element: [ 'ServiceDocumentDescription']
  key ServiceDocument     as BusinessSolutionOrder,

      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceObjectType,

      // Header Details
      ServiceDocumentUUID as BusinessSolutionOrderUUID,
      //ServiceDocumentCharUUID,
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceDocumentType,
      @Semantics.text: true
      ServiceDocumentDescription,
      Language,
      PostingDate,

      //BusinessActivityCategory,
      //ServiceDocumentPriority,

      // Cumulate Extension
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocNetAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocTaxAmount,

      TransactionCurrency,

      // Partner Details
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,
      @ObjectModel.foreignKey.association: '_SoldToPartyCountry'
      SoldToPartyCountry,
      @ObjectModel.foreignKey.association: '_SoldToPartyRegion'
      SoldToPartyRegion,
      @ObjectModel.foreignKey.association: '_RespEmployee'
      ResponsibleEmployee,

      // Status
      @ObjectModel.foreignKey.association: '_SrvcDocLifecycleStatus'
      ServiceDocumentStatus,

      // Organizational Unit Set
      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit_2'
      SalesOrganizationOrgUnitID,
      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit_2'
      SalesOfficeOrgUnitID,
      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit_2'
      SalesGroupOrgUnitID,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
      Division,
      @ObjectModel.foreignKey.association: '_ServiceOrganizationOrgUnit_2'
      ServiceOrganization,
      @ObjectModel.foreignKey.association: '_RespSrvcOrganizationOrgUnit_2'
      ResponsibleServiceOrganization,

      // Organizational units with the S/4 SD codes
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,

      // Header Details Assocations
      _ServiceDocumentType,

      // Partner Details Associations
      _SoldToParty,
      _SoldToPartyCountry,
      _SoldToPartyRegion,
      _RespEmployee,

      // Status Assocations
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcDocLifecycleStatus'
      _ServiceDocumentStatus,
      _SrvcDocLifecycleStatus,

      // Organization Unit Set Assocations
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesOrganizationOrgUnit_2'
      _SalesOrganizationOrgUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SalesOrganizationOrgUnit_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesOfficeOrgUnit_2'
      _SalesOfficeOrgUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SalesOfficeOrgUnit_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesGroupOrgUnit_2'       
      _SalesGroupOrgUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SalesGroupOrgUnit_2,
      _DistributionChannel,
      _Division,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ServiceOrganizationOrgUnit_2'      
      _ServiceOrganizationOrgUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceOrganizationOrgUnit_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_RespSrvcOrganizationOrgUnit_2'       
      _RespSrvcOrganizationOrgUnit, 
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true  
      _RespSrvcOrganizationOrgUnit_2,
      _SalesOrganization,
      _SalesOffice,
      _SalesGroup,
      _ServiceObjType
}
where
  ServiceObjectType = 'BUS2000172'
```
