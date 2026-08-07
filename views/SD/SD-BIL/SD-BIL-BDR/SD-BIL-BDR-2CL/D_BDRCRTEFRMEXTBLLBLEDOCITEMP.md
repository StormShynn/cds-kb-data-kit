---
name: D_BDRCRTEFRMEXTBLLBLEDOCITEMP
description: D Bdrcrtefrmextbllbledocitemp
app_component: SD-BIL-BDR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-BDR
  - item-level
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
---
# D_BDRCRTEFRMEXTBLLBLEDOCITEMP

**D Bdrcrtefrmextbllbledocitemp**

| Property | Value |
|---|---|
| App Component | `SD-BIL-BDR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReferenceDocumentItem` |  | |  | `sdbil_odata_src_doc_item` |  |  |
| `SalesDocumentType` |  | |  | `auart` |  |  |
| `SalesDocumentItemCategory` |  | |  | `sales_doc_item_category` |  |  |
| `ReferenceDocumentItemText` |  | |  | `billing_doc_request_item_text` |  |  |
| `BillingDocumentRequestType` |  | |  | `sdbil_odata_bdr_type` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `Division` |  | |  | `spart` |  |  |
| `BillingDocumentDate` |  | |  | `fkdat` |  |  |
| `SoldToParty` |  | |  | `kunag` |  |  |
| `TransactionCurrency` |  | |  | `waerk` |  |  |
| `TaxDepartureCountry` |  | |  | `landtx` |  |  |
| `PurchaseOrderByCustomer` |  | |  | `bstkd` |  |  |
| `CustomerPaymentTerms` |  | |  | `dzterm` |  |  |
| `PaymentMethod` |  | |  | `schzw_bseg` |  |  |
| `Product` |  | |  | `productnumber` |  |  |
| `IncotermsClassification` |  | |  | `inco1` |  |  |
| `IncotermsTransferLocation` |  | |  | `inco2` |  |  |
| `IncotermsVersion` |  | |  | `incov` |  |  |
| `IncotermsLocation1` |  | |  | `inco2_l` |  |  |
| `IncotermsLocation2` |  | |  | `inco3_l` |  |  |
| `MatlAccountAssignmentGroup` |  | |  | `ktgrm` |  |  |
| `BillingQuantity` |  | |  | `billing_quantity` |  |  |
| `BillingQuantityUnit` |  | |  | `billing_quantity_unit` |  |  |
| `ServicesRenderedDate` |  | |  | `fbuda` |  |  |
| `PricingDate` |  | |  | `prsdt` |  |  |
| `PriceDetnExchangeRate` |  | |  | `kursk_not_converted` |  |  |
| `TaxJurisdiction` |  | |  | `txjcd` |  |  |
| `ProductTaxClassification1` |  | |  | `taxm1` |  |  |
| `Plant` |  | |  | `werks_d` |  |  |
| `DepartureCountry` |  | |  | `aland` |  |  |
| `ProfitCenter` |  | |  | `prctr` |  |  |
| `ContractAccount` |  | |  | `corr_vkont_kk` |  |  |
| `CostCenter` |  | |  | `kostl` |  |  |
| `WBSElementInternalID` |  | |  | `ps_s4_pspnr` |  |  |
| `SEPAMandate` |  | |  | `sepa_mndid` |  |  |
| `_DummyAssociation` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Create BDR from Ext Data - Item Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
@AbapCatalog.extensibility.extensible: true

define abstract entity D_BDRCrteFrmExtBllbleDocItemP
{

      ReferenceDocumentItem                 : sdbil_odata_src_doc_item; //Mandatory 
            
      SalesDocumentType                     : auart; //Mandatory

      SalesDocumentItemCategory             : sales_doc_item_category; //Mandatory
      
      @Semantics.text: true
      ReferenceDocumentItemText             : billing_doc_request_item_text;

      BillingDocumentRequestType            : sdbil_odata_bdr_type; //Mandatory

      SalesOrganization                     : vkorg; //Mandatory
      DistributionChannel                   : vtweg; //Mandatory
      Division                              : spart; //Mandatory

      BillingDocumentDate                   : fkdat;
      
      SoldToParty                           : kunag; //Mandatory
      
      @Semantics.currencyCode: true
      TransactionCurrency                   : waerk; //Mandatory
      
      TaxDepartureCountry                   : landtx;
      
      PurchaseOrderByCustomer               : bstkd;
      
      CustomerPaymentTerms                  : dzterm;
      
      PaymentMethod                         : schzw_bseg;
      
      Product                               : productnumber; //Mandatory
      
      IncotermsClassification               : inco1;
      
      IncotermsTransferLocation             : inco2;
      
      IncotermsVersion                      : incov;
      
      IncotermsLocation1                    : inco2_l;
      
      IncotermsLocation2                    : inco3_l;
      
      MatlAccountAssignmentGroup            :  ktgrm;
      
      @Semantics.quantity.unitOfMeasure: 'BillingQuantityUnit'
      BillingQuantity                       : billing_quantity; //Mandatory   
      @Semantics.unitOfMeasure: true   //? 
      BillingQuantityUnit                   : billing_quantity_unit; //Mandatory 

      ServicesRenderedDate                  : fbuda;  
      
      PricingDate                           : prsdt; 
      
      PriceDetnExchangeRate                 : kursk_not_converted;  
      
      TaxJurisdiction                       :  txjcd;  
      
      ProductTaxClassification1             : taxm1;
      
      Plant                                 : werks_d; //Mandatory
      
      DepartureCountry                      : aland;
      
      ProfitCenter                          : prctr;
      
      ContractAccount                       : corr_vkont_kk;
      
      CostCenter                            :  kostl;  
      
      WBSElementInternalID                  : ps_s4_pspnr; // Db: ps_psp_pnr ?
            
      SEPAMandate                           : sepa_mndid;
         
      _PricingElement  : association [0..*] to D_BDRCrteFrmExtPrcgElmntP on 1=0;
      
      _Text            : association [0..*] to D_BDRCrteFrmExtTextP on 1 = 0; 
      
      _Partner         : association [0..*] to D_BDRCrteFrmExtPartnerP on 1 = 0;
      
      _DummyAssociation : association to parent D_BDRCrteFrmExtBllbleDocP; //standardized association
      
}
```
