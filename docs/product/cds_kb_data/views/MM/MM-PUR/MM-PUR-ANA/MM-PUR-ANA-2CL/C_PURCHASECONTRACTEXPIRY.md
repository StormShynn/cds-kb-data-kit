---
name: C_PURCHASECONTRACTEXPIRY
description: "Purchase ContractEXPIRY"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - purchase-contract
  - contract
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_PURCHASECONTRACTEXPIRY

**Purchase ContractEXPIRY**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `name:'I_Currency'` |  | |  |  |  |  |
| `element:'Currency'` |  | |  |  |  |  |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.dataClass: #MIXED 
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory:  #L 
@AbapCatalog.sqlViewName: 'CMMPURCONEXP'
@EndUserText.label: 'Purchase Contract Expiry'
@VDM.viewType: #CONSUMPTION
@Analytics.dataCategory: #CUBE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.allowExtensions:true
@OData.publish: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER  ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
define view C_PurchaseContractExpiry 

with parameters  
    @Consumption.defaultValue: 'EUR'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'I_Currency',
        element:'Currency'
      }
    }]
    P_DisplayCurrency: displaycurrency,

    @Consumption.hidden : true
    @Environment.systemField : #SYSTEM_LANGUAGE
    P_Language : spras,
   
    @Consumption.defaultValue: 'PREVIOUSYEARTODATE'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'C_GregorianCalDateFuncVH',
        element:'DateFunction'
      }
    }]
    P_DateFunction : datefunctionid,
    
    @Consumption.derivation: { lookupEntity: 'C_SglGregorianCalDateFunction', 
    resultElement: 'DateFunctionStartDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' },
       { targetParameter : 'P_Language' , type : #SYSTEM_FIELD, value : '#SYSTEM_LANGUAGE'  } ] 
    } 
    @Consumption.hidden: true
    P_StartDate: vdm_validitystart,
    
    @Consumption.derivation: { lookupEntity: 'C_SglGregorianCalDateFunction', 
    resultElement: 'DateFunctionEndDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' },
       { targetParameter : 'P_Language' , type : #SYSTEM_FIELD, value : '#SYSTEM_LANGUAGE'  } ] 
    } 
    @Consumption.hidden: true
    P_EndDate: vdm_validityend
     

as select from P_PurchaseContractExpiry2( P_Date: $parameters.P_StartDate, 
                                          P_DisplayCurrency : $parameters.P_DisplayCurrency, 
                                          P_EndDate : $parameters.P_EndDate) as ContractExpiry

association[1..1] to I_Supplier as _Supplier
    on $projection.Supplier = _Supplier.Supplier
association[1..1] to  I_PurchasingOrganization as _PurchasingOrganization
    on $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization
association[1..1] to I_PurchasingGroup as _PurchasingGroup
    on $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
      
association[1..1] to I_PurchasingDocumentSubtype as _PurchasingDocumentSubType 
    on $projection.PurchasingDocumentSubtype = _PurchasingDocumentSubType.PurchasingDocumentSubtype

association[1..1] to I_PurchasingDocumentCategory as _PurchasingDocumentCategory 
    on $projection.PurchasingDocumentCategory = _PurchasingDocumentCategory.PurchasingDocumentCategory
association [1..1] to I_PurchasingDocumentType as _PurchasingDocumentType 
   on $projection.PurchaseContractType = _PurchasingDocumentType.PurchasingDocumentType
  and $projection.PurchasingDocumentCategory = _PurchasingDocumentType.PurchasingDocumentCategory   
{
     key ContractExpiry.PurchaseContract,
     

     /* Header Data */
    @ObjectModel.text.element: ['PurchasingGroupName']  
    @Consumption.labelElement: 'PurchasingGroupName' 
    @Consumption.valueHelpDefinition: [{ entity: { name : 'C_PurchasingGroupValueHelp', element : 'PurchasingGroup' } }]  
    ContractExpiry.PurchasingGroup,
    @Semantics.text: true
    _PurchasingGroup.PurchasingGroupName,
     
    @ObjectModel.text.element: ['PurchasingOrganizationName'] 
    @Consumption.labelElement: 'PurchasingOrganizationName' 
    @Consumption.valueHelpDefinition: [{ entity: { name : 'C_PurchasingOrgValueHelp', element : 'PurchasingOrganization' } }]   
    ContractExpiry.PurchasingOrganization,
     @Semantics.text: true
     _PurchasingOrganization.PurchasingOrganizationName,

     /* Supplier */
      @ObjectModel.text.element:  [ 'SupplierName' ]
      @Consumption.labelElement: 'SupplierName'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'C_MM_SmplSupplierValueHelp', element : 'Supplier' } }]
      ContractExpiry.Supplier,
      @Semantics.text : true
      _Supplier.SupplierName as SupplierName,
      
      @Consumption.valueHelpDefinition: [{ entity: { name : 'C_CompanyCodeValueHelp', element : 'CompanyCode' } }]  
      ContractExpiry.CompanyCode,
            
     @EndUserText.label: 'Purchasing Document Category'
     @ObjectModel.text.element: ['PurchasingDocumentCategoryName']  
     @Consumption.labelElement: 'PurchasingDocumentCategoryName'
     @Consumption.valueHelpDefinition: [{ entity: { name : 'C_PurchasingDocCategoryVH', element : 'PurchasingDocumentCategory' } }]  
     ContractExpiry.PurchasingDocumentCategory,
     @Semantics.text: true
     _PurchasingDocumentCategory._Text[1: Language = $session.system_language].PurchasingDocumentCategoryName as PurchasingDocumentCategoryName,

     @EndUserText.label: 'Purchasing Document Subtype'
     @ObjectModel.text.element: ['PurchasingDocumentSubtypeName']  
     @Consumption.labelElement: 'PurchasingDocumentSubtypeName'
     @Consumption.valueHelpDefinition: [{ entity: { name : 'C_PurchasingDocSubtypeVH', element : 'PurchasingDocumentSubtype' } }]    
     PurchasingDocumentSubtype,
     
     @Semantics.text: true
     _PurchasingDocumentSubType._Text[1: Language = $session.system_language].PurchasingDocumentSubTypeName as PurchasingDocumentSubTypeName, 
 
     @EndUserText.label: 'Document Type'
     @ObjectModel.text.element: ['PurchasingDocumentTypeName']
     @Consumption.valueHelpDefinition: [{ entity: { name : 'I_PurchasingDocumentType', element : 'PurchaseContractType' } }]   
     PurchaseContractType,
      @Semantics.text: true
      _PurchasingDocumentType._Text[1: Language = $parameters.P_Language].PurchasingDocumentTypeName as PurchasingDocumentTypeName,
     
     /* Contract Validity Check*/
     
     @Semantics.businessDate.from: true
     ContractExpiry.ValidityStartDate,
     @Semantics.businessDate.to: true
     ContractExpiry.ValidityEndDate,
     
     
     ContractExpiry.CreatedByUser,
     
     @Semantics.currencyCode:true
     @Consumption.filter.hidden: true
     ContractExpiry.DisplayCurrency,

     
     /* Measures*/
     @Semantics.amount.currencyCode: 'DisplayCurrency' 
     @DefaultAggregation: #SUM     
     cast(ReleaseOrderItemNetAmount as mm_a_release_order_net_amount) as ReleaseOrderItemNetAmount,
     

     @DefaultAggregation: #SUM
     cast(1 as mm_a_expiring_contract_number ) as NmbrOfExpiringContracts,
     
     @Semantics.amount.currencyCode: 'DisplayCurrency' 
     @DefaultAggregation: #SUM
     cast(TargetAmount as mm_a_target_amount) as TargetAmount
     
   
     
}
```
