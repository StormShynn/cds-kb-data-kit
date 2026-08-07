---
name: I_PARTNERCOMPANY
description: Partnercompany
app_component: FI-GL-GL-N-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - partner
  - component:FI-GL-GL-N-2CL
  - lob:Finance
---
# I_PARTNERCOMPANY

**Partnercompany**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PartnerCompany` | ✓ | |  | `Company` |
| `CompanyName` |  | |  |  |
| `Language` |  | |  | `CompanyLanguage` |
| `_Language` | | ✓ | | |
| `_CompanyCode` | | ✓ | | |
| `_GLAccount` | | ✓ | | |
| `_Customer` | | ✓ | | |
| `_Supplier` | | ✓ | | |
| `_GlobalCompanyHierNode` | | ✓ | | |
| `_PartnerCompanySupplierAuthzn` | | ✓ | | |
| `_PartnerCompanyCustomerAuthzn` | | ✓ | | |
| `_PartnerCompanyGLAcctAuthzn` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..*] |
| `_GLAccount` | `I_GLAccountAuthznInCompany` | [0..*] |
| `_Customer` | `I_Customer` | [0..*] |
| `_Supplier` | `I_Supplier` | [0..*] |
| `_GlobalCompanyHierNode` | `I_GlobalCompanyHierNode` | [0..*] |
| `_PartnerCompanySupplierAuthzn` | `I_PartnerCompanySupplierAuthzn` | [0..*] |
| `_PartnerCompanyCustomerAuthzn` | `I_PartnerCompanyCustomerAuthzn` | [0..*] |
| `_PartnerCompanyGLAcctAuthzn` | `I_PartnerCompanyGLAcctAuthzn` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'PartnerCompany'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@VDM.viewType: #BASIC
@Analytics: {dataCategory: #DIMENSION}
@Analytics.technicalName: 'IPARTNERCOMPANY'
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Partner Company'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations:true 
@Search.searchable: true
@AccessControl.privilegedAssociations:  ['_GLAccount', '_PartnerCompanySupplierAuthzn', '_PartnerCompanyCustomerAuthzn', '_PartnerCompanyGLAcctAuthzn']

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY]
                                     
define view entity I_Partnercompany
  as select from I_Globalcompany as PartnerCompany

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [0..*] to I_CompanyCode as _CompanyCode on $projection.PartnerCompany = _CompanyCode.Company
  association [0..*] to I_GLAccountAuthznInCompany as _GLAccount on  $projection.PartnerCompany = _GLAccount.PartnerCompany
  association [0..*] to I_Customer  as _Customer on  $projection.PartnerCompany = _Customer.TradingPartner
  association [0..*] to I_Supplier  as _Supplier on  $projection.PartnerCompany = _Supplier.TradingPartner
  association [0..*] to I_GlobalCompanyHierNode as _GlobalCompanyHierNode    on $projection.PartnerCompany = _GlobalCompanyHierNode.PartnerCompany
/* New associations for authorization checks with improved performance - update 26/09/2023: the next two associations are no longer used. They are kept for compatibility */
  association [0..*] to I_PartnerCompanySupplierAuthzn  as _PartnerCompanySupplierAuthzn on  $projection.PartnerCompany = _PartnerCompanySupplierAuthzn.PartnerCompany
  association [0..*] to I_PartnerCompanyCustomerAuthzn  as _PartnerCompanyCustomerAuthzn on  $projection.PartnerCompany = _PartnerCompanyCustomerAuthzn.PartnerCompany
 /* this association has changed to retrieve data from UNION with date 26/09/2023. For compatibility reason the name is kept, although it will do Customer, Supplier and GL Account */
  association [0..*] to I_PartnerCompanyGLAcctAuthzn  as _PartnerCompanyGLAcctAuthzn on  $projection.PartnerCompany = _PartnerCompanyGLAcctAuthzn.PartnerCompany
    
{
      @ObjectModel.text.element: ['CompanyName']
      @ObjectModel.hierarchy.association: '_GlobalCompanyHierNode'      
      @Search.defaultSearchElement:true
      @Search.fuzzinessThreshold:0.8
      @Search.ranking:#HIGH      
  key PartnerCompany.Company       as PartnerCompany,
      @Search.defaultSearchElement:true
      @Search.fuzzinessThreshold:0.8
      @Search.ranking:#HIGH  
      @Semantics.text
      PartnerCompany.CompanyName       as CompanyName,
      @ObjectModel.foreignKey.association: '_Language'
      PartnerCompany.CompanyLanguage   as Language,
      //       PartnerCompany.cntry,
      //       PartnerCompany.name2,
      //       PartnerCompany.stret,
      //       PartnerCompany.pobox,
      //       PartnerCompany.pstlc,
      //       PartnerCompany.city,
      //       PartnerCompany.curr,
      //       PartnerCompany.modcp,
      //       PartnerCompany.glsip,
      //       PartnerCompany.resta,
      //       PartnerCompany.rform,
      //       PartnerCompany.zweig,
      //       PartnerCompany.mcomp,
      //       PartnerCompany.mclnt,
      //       PartnerCompany.lccomp,
      //       PartnerCompany.strt2,
      //       PartnerCompany.indpo

      _Language,
      _GlobalCompanyHierNode,
@Consumption.hidden: true      
      _CompanyCode,
@Consumption.hidden: true      
      _GLAccount,
@Consumption.hidden: true      
      _Customer,
@Consumption.hidden: true      
      _Supplier,
@Consumption.hidden: true      
      _PartnerCompanySupplierAuthzn,
@Consumption.hidden: true      
      _PartnerCompanyCustomerAuthzn,
@Consumption.hidden: true      
      _PartnerCompanyGLAcctAuthzn    
      
      
}
```
